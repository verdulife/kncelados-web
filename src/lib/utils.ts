import "core-js/actual/object/group-by";
import episodes from "@/lib/episodes.json";
import slugify from "slugify";
import { findBestMatch } from "string-similarity";

const seasons_object = Object.groupBy(episodes, ({ season }) => season);
const titles = episodes.map(({ title }) => title.toLowerCase());

export const lastEpisode = episodes[0];
export const seasons = Object.values(seasons_object).reverse();

export function generateSlug(title: string) {
  return slugify(title).toLowerCase()
}

export function getCurrentEpisode(slug: string) {
  const { target } = findBestMatch(slug, titles).bestMatch;

  return episodes.find(
    ({ title }) => title.toLowerCase() === target
  );
}