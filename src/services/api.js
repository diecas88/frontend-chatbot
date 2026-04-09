import ENV from "../config/env";

export const sendQueryToLambda = async (text) => {
  const response = await fetch(ENV.API_URL, {
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