const API_URL = process.env.REACT_APP_API_URL;

console.log("URL final:", process.env.REACT_APP_API_URL);

export const sendQueryToLambda = async (text) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
    }),
  });

  const data = await response.json();
  return data.results;
};