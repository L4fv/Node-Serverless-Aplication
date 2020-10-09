var AWSMock = require("aws-sdk-mock");
var AWS = require("aws-sdk");
const chai = require("chai");

const StubPeople = require("./stubs/People.json");
const getPeopleServices = require("../src/controllers/GetPeopleCtrl");
const posPeopleServices = require("../src/controllers/PostPeopleCtr");
const getApiStarWars = require("../src/helpers/consumers/starwars");
const expect = chai.expect;
const DynamoConection = require("../src/db/dynamoDB");
describe("Test GET PEOPLE", () => {
  before(() => {
    process.env.URL_STARTWARS = "https://swapi.py4e.com/api";
    process.env.POST_TABLE = "PEOPLE_DB";
  });

  it("should get people from starwars when exist", async () => {
    const id = 5;
    const result = await getApiStarWars.GET_API_SW(id);
    expect(200).to.be.equal(result.status);
  });

  it("should get people from starwars when not exist", async () => {
    const id = 404;
    const result = await getApiStarWars.GET_API_SW(id);
    //console.log("result ", result);
    expect(404).to.be.equal(result.status);
  });

  it("get people from DynamoDb", async () => {
    //console.log("process.env", StubPeople);
    AWSMock.setSDKInstance(AWS);

    AWSMock.mock("DynamoDB.DocumentClient", "get", function(params, callback) {
      console.log("get sucess");
      callback(null, { Item: StubPeople });
    });
    const params = { TableName: "", Key: {} };
    const result = await DynamoConection.getDataDynamoDB(params);
    //console.log("result ", result);
    expect(200).to.be.equal(result.status);
    expect(StubPeople).to.deep.equal(result.body);
  });

  it("post people to DynamoDb", async () => {
    //console.log("process.env", StubPeople);
    AWSMock.setSDKInstance(AWS);

    AWSMock.mock("DynamoDB.DocumentClient", "put", function(params, callback) {
      console.log("put sucess");
      callback(null, { StubPeople });
    });
    const params = { TableName: "", Item: {} };
    const result = await DynamoConection.PutDynamoDb(params);
    console.log("result ", result);
    expect(200).to.be.equal(result.status);
    expect(StubPeople).to.deep.equal(result.body);
  });

  /* ---- MORE CASES --- */
});
