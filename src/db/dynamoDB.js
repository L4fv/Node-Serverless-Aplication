const AWS = require("aws-sdk");
//const db = new AWS.DynamoDB.DocumentClient();

class DynamoDB {
  static async PutDynamoDb(params) {
    try {
      const db = new AWS.DynamoDB.DocumentClient();

      const result = await db.put(params).promise();

      return {
        status: 200,
        body: result,
      };
    } catch (error) {
      console.log("error: ", error);

      return {
        status: 500,
        body: {
          message: "Ha ocurrido un error interno",
        },
      };
    }
  }

  static async getDataDynamoDB(params) {
    try {
      const db = new AWS.DynamoDB.DocumentClient();

      const { Item } = await db.get(params).promise();

      return {
        status: 200,
        body: Item,
      };
    } catch (error) {
      console.log("error: ", error);
      return {
        status: 500,
        body: {
          message: "Ha ocurrido un error interno",
        },
      };
    }
  }
}

module.exports = DynamoDB;
