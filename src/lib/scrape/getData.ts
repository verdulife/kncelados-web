import ogs from "open-graph-scraper";
import { episodes } from "@/lib/seasons";

const BASE_URL = "https://www.youtube.com/watch?v=";

episodes.forEach((season) => {
  return season.map(async (episode) => {
    const options = { url: BASE_URL + episode.id };
    ogs(options).then(({ result }) => {
      const { ogTitle, ogDescription, ogImage } = result;

      if (!ogImage) return;

      const data = {
        episode: episode.episode,
        season: episode.season,
        id: episode.id,
        title: ogTitle,
        description: ogDescription,
        image: ogImage[0],
      }

      console.log(data);

    });
  })
});