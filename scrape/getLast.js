import { episodes } from "./episodes.js";
import { remakeDescription } from "./remake.js";
import { writeFile } from "node:fs/promises";
import ogs from "open-graph-scraper";

const BASE_URL = "https://www.youtube.com/watch?v=";
const last_episode = episodes[0][0];
const { episode, season, id } = last_episode;
const options = { url: BASE_URL + id };

try {
  const res = await ogs(options);
  const { ogTitle, ogDescription, ogImage, requestUrl } = res.result;
  const description = await remakeDescription(ogDescription);

  console.log(description);

  const data = {
    episode,
    season,
    id,
    title: ogTitle,
    description: ogDescription,
    image: ogImage[0].url,
    url: requestUrl
  };

  console.log(`Making ${season}x${episode}`);
  /* const json = JSON.stringify(data, null, 2);
  await writeFile("./scrape/episodes.json", json, "utf-8"); */

  console.log(data);
} catch (error) {
  console.error(error);
}