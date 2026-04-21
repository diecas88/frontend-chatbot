const API_URL = process.env.REACT_APP_API_URL;

export const sendQueryToLambda = async (text) => {

  // 🔥 Validación clave para Amplify
  if (!API_URL) {
    console.error("API_URL no está definida. Verifica REACT_APP_API_URL en Amplify.");
    return "Error de configuración (API_URL)";
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: text }),
    });

    // 🔥 Manejo de errores HTTP
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const lambdaResponse = await response.json();
    console.log("respuesta===>", lambdaResponse);

    if (!lambdaResponse || !lambdaResponse.type) {
      return "Respuesta inválida del servidor";
    }

    if (lambdaResponse.type === "prediction") {
      return "Esto es una predicción, " + lambdaResponse.data;
    }

    if (lambdaResponse.type === "rag") {
      return "Esto es dato histórico, " + lambdaResponse.data;
    }

    return "No response";

  } catch (e) {
    console.error("Error en request:", e);
    return "Error en la consulta";
  }
};