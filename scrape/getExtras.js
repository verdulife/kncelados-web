import { writeFile } from "node:fs/promises";
import ogs from "open-graph-scraper";
import { collections } from "./collections.js";

const BASE_URL = "https://www.youtube.com/watch?v=";
let data = [];

for await (let [ind, seasonData] of collections.entries()) {
  data[ind] = [];

  for await (let episodeData of seasonData) {
    const { type, id } = episodeData;
    const options = { url: BASE_URL + id };

    try {
      const res = await ogs(options);
      const { ogTitle, ogDescription, ogImage, requestUrl } = res.result;

      data[ind].push({
        type,
        id,
        title: ogTitle,
        description: ogDescription,
        image: ogImage[0],
        url: requestUrl
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const json = JSON.stringify(data, null, 2);
await writeFile("./src/lib/extras.json", json, "utf-8")