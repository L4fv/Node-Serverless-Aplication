const conexionDynamo = require("../db/dynamoDB");

const { v4: uuidv4 } = require("uuid");

class PostPeopleCtr {
  static async postPeople(event, context) {
    let res = {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
    };
    try {
      const data = JSON.parse(event.body);
      //validate input here
      //{}
      //console.log(event);
      const id = uuidv4();
      const body = {
        TableName: process.env.POST_TABLE,
        Item: {
          ...data,
          createAt: new Date().toISOString(),
          id,
        },
      };
      // console.log("params : ", body);
      await conexionDynamo.PutDynamoDb(body);
      res = {
        ...res,
        statusCode: 200,
        body: JSON.stringify({ message: "Success", id }),
      };
      return res;
    } catch (error) {
      console.log("err ", error);
      res = {
        ...res,
        statusCode: 500,
        body: JSON.stringify({ message: "Ha ocurrido un error Interno" }),
      };
      return res;
    }
  }
}

module.exports = PostPeopleCtr;
