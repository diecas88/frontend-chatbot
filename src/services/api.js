const API_URL = process.env.REACT_APP_API_URL;

console.log("URL final:", process.env.REACT_APP_API_URL);

export const sendQueryToLambda = async (text) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: text }),
  });

  const lambdaResponse = await response.json();
  const data = JSON.parse(lambdaResponse.body);

  if (data.type === "prediction") {
    return data.data;
  }

  if (data.type === "rag") {
    return data.data;
  }

  return "No response";
};