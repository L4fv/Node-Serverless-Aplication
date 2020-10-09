const starWars = require("../helpers/consumers/starwars");
const People = require("../models/People");
const conexionDynamo = require("../db/dynamoDB");

class GetPeopleCtrl {
  static async getPeopleById(event, context) {
    let res = {
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
    };
    try {
      //console.log("event: ", event);
      const params = event.pathParameters;

      const body = {
        TableName: process.env.POST_TABLE,
        Key: {
          id: params.id,
        },
      };

      //buscar en dynamoDB
      const result = await conexionDynamo.getDataDynamoDB(body);

      if (result.status === 200 && result.body) {
        res = {
          ...res,
          statusCode: 200,
          body: result.body,
        };
      } else {
        //buscar en API STAR_WARS

        const { data, status } = await starWars.GET_API_SW(params.id);
        //se encontró en api sw?
        if (status === 200) {
          res = {
            ...res,
            statusCode: 200,
            body: JSON.stringify(new People(data)),
          };
        } else {
          // 404
          res = {
            ...res,
            statusCode: status,
            body: JSON.stringify({
              message: "No se ha encontrado una persona en su busqueda",
            }),
          };
        }
      }

      return res;
    } catch (error) {
      console.log("error; ", error);
      return {
        ...res,
        statusCode: 500,
        body: JSON.stringify({
          message: "ha ocurrido un error interno",
        }),
      };
    }
  }
}

module.exports = GetPeopleCtrl;
