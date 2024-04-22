import "core-js/actual/object/group-by";
import episodes from "@/lib/episodes.json";
import slugify from "slugify";
import { findBestMatch } from "string-similarity";
import type { Metadata } from "./types";

const seasons_object = Object.groupBy(episodes, ({ season }) => season);
const shorts_obj: Record<string, Metadata> = import.meta.glob('@/lib/shorts/*.json', { import: 'default', eager: true });
const collections_obj: Record<string, Metadata> = import.meta.glob('@/lib/collections/*.json', { import: 'default', eager: true });

export const lastEpisode = episodes[0];
export const seasons = Object.values(seasons_object).reverse();
export const shorts = Object.values(shorts_obj).reverse();
export const collections = Object.values(collections_obj).reverse();

const allVideos = [...episodes, ...shorts, ...collections];
const titles = allVideos.map(({ title }) => title.toLowerCase());

console.log(titles);


export function generateSlug(title: string) {
  return slugify(title).toLowerCase();
}

export function getCurrentEpisode(slug: string) {
  const { target } = findBestMatch(slug, titles).bestMatch;

  return allVideos.find(
    ({ title }) => title.toLowerCase() === target
  );
}