import { ENDPOINT } from "./endpoint";
import request from "./request";

export const ApiGetAllCharacters = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await request.get(ENDPOINT.CHARACTER);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const ApiGetCharacter = (id) => {
  const url = `${ENDPOINT.CHARACTER}/${id}`;
  return new Promise(async (resolve, reject) => {
    try {
      const result = await request.get(url);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
