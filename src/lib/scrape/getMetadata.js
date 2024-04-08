import { writeFileSync } from "node:fs";

import ogs from "open-graph-scraper";
import episodes from "./episodes.json" assert { type: "json" };

const BASE_URL = "https://www.youtube.com/watch?v=";

const metadata = episodes.map(async (episode) => {
  const options = { url: BASE_URL + episode.id };

  const data = await ogs(options);
  const { error, result } = data;
  if (error) return;

  const { ogTitle, ogDescription, ogImage } = result;

  episode.ogTitle = ogTitle;
  episode.ogDescription = ogDescription;
  episode.ogImage = ogImage[0];

  return episode;
});

Promise.all(metadata)
  .then(data => {
    console.log(data);
  })

