import { ENDPOINT } from "./endpoint";
import request from "./request";

export const ApiGetAllEpisodes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await request.get(ENDPOINT.EPISODE);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
