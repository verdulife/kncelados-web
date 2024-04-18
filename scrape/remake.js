import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "PhYsAmyxZ50A5WKnYmaaN3uICnWsrhVnzsSJZpvs"
});

export async function remakeDescription(title, description) {
  const { text } = await cohere.chat({
    chatHistory: [
      {
        role: "USER",
        message: `
          Tengo una descripcion de un video de youtube, puedes modificarla para que sea la misma, pero que google no lo reconozca como texto duplicado.
          Algunas consideraciones son:
            - Kncelados es un video podcast de humor.
            - El podcast nunca ofrece consejos ni trucos, solo humor y tonterias.
            - Kncelados es un nombre propio.
            - Para los nombres propios nunca hagas modificaciones.
            - Tampoco necesito los hashtags.
            - Tambien necesito que el tono el texto, sea desenfadado, pero que no sea recargado ni ñoño.
            - Kncelados es un podcast de varios integrantes, refierete a Kncelados en plural.
            - Responde exclusivamente la respuesta, no añadas texto introductorio ni minesajes sobre el trabajo realizado.
            - Tampoco embuelvas la respuesta entre comitas.
            - Devuelte un texto en primera persona (como si fueras el podcast Kncelados).
            - Habla tuteando, con español de España.
            - No generes textos de cierre.
            - Segun el titulo "${title}", y considerando la description que generes, reforumala tambien el titulo.
            - devuelveme el titulo y la descripcion en un array, donde la posicion 0 sea el titulo y la 1 la descripcion.
        `
      }
    ],
    message: description
  });

  return text;
}
