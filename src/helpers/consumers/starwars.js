const axios = require("axios");

const axiosclient = axios.create({
  timeout: 1000 * 20,
});

exports.GET_API_SW = async id => {
  try {
    const _id = parseInt(id);
    const response = await axiosclient({
      method: "GET",
      url: `/people/${_id}`,
      baseURL: process.env.URL_STARTWARS,
    });

    return response;
  } catch (error) {
    //console.log("err ", error);
    return {
      status: error.response.status,
      body: {
        message: JSON.stringify(error.response.statusText),
      },
    };
  }
};
