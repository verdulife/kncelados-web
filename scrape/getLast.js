import { episodes } from "./episodes.js";
import { remakeDescription } from "./remake.js";
import { writeFile } from "node:fs/promises";
import ogs from "open-graph-scraper";

const BASE_URL = "https://www.youtube.com/watch?v=";
const last_episode = episodes[0][0];
const { episode, season, id } = last_episode;
const options = { url: BASE_URL + id };

try {
  console.log(`⌛ Making ${season}x${episode}...`);

  const res = await ogs(options);
  const { ogTitle, ogDescription, ogImage, requestUrl } = res.result;
  const description = await remakeDescription(ogDescription);

  const data = {
    episode,
    season,
    id,
    title: ogTitle,
    description: description,
    image: ogImage[0].url,
    url: requestUrl
  };

  console.log(data);

  /* const json = JSON.stringify(data, null, 2);
  await writeFile(`./src/lib/episodes/${season}/${season}x${episode}.json`, json, "utf-8"); */
} catch (error) {
  console.error(error);
}