//import ENV from "../config/env";
//console.log("URL final:", ENV.API_URL);

const API_URL = process.env.REACT_APP_API_URL;
//console.log("URL final:", process.env.REACT_APP_API_URL);

export const sendQueryToLambda = async (text) => {
  //const response = await fetch(ENV.API_URL, {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: text }),
  });

  const lambdaResponse = await response.json();
  console.log("respuesta===>", lambdaResponse);

  try {
    if (lambdaResponse.type == "prediction") {
      return "Esto es una predicción, " + lambdaResponse.data;
    }

    if (lambdaResponse.type == "rag") {
      return "Esto es dato histórico, " + lambdaResponse.data;
    }

    return "No response";
  }
  catch(e) {

    return e;
  }

};