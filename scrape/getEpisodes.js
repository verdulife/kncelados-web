import { writeFile } from "node:fs/promises";
import ogs from "open-graph-scraper";
import { episodes } from "./episodes.js";

const BASE_URL = "https://www.youtube.com/watch?v=";
let data = [];

for await (let [ind, seasonData] of episodes.entries()) {
  data[ind] = [];

  for await (let episodeData of seasonData) {
    const { episode, season, id } = episodeData;
    const options = { url: BASE_URL + id };

    try {
      const res = await ogs(options);
      const { ogTitle, ogDescription, ogImage, requestUrl } = res.result;

      data[ind].push({
        episode,
        season,
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
await writeFile("./src/lib/episodes.json", json, "utf-8")