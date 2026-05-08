const API_URL = process.env.REACT_APP_API_URL;

export const sendQueryToLambda = async (text) => {

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: text }),
    });

    // Manejo de errores HTTP
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const lambdaResponse = await response.json();
   

    if (!lambdaResponse || !lambdaResponse.type) {
      return "Respuesta inválida del servidor";
    }
    
    return lambdaResponse.data;
    
  } catch (e) {
    return "Error en la consulta";
  }
};