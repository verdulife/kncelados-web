import "core-js/actual/object/group-by";
import type { Metadata, Episode } from "./types";
import slugify from "slugify";

const episodes_obj: Record<string, Episode> = import.meta.glob('./episodes/*.json', { import: 'default', eager: true });
const sortedBySeason = Object.values(episodes_obj).sort((a, b) => a.season - b.season);
const sortedByEpisope = sortedBySeason.sort((a, b) => a.episode - b.episode);
export const episodes = sortedByEpisope.reverse();

const currentDate = new Date();
const timezone = 2;
const currentDay = currentDate.getDay();
const currentUTCHours = currentDate.getUTCHours();
const currentHours = currentUTCHours + timezone;
export const hideLast = currentHours >= 11 && currentHours < 20 && currentDay === 1;
export const lastEpisode = episodes[hideLast ? 1 : 0];

const seasons_object = Object.groupBy(episodes, ({ season }) => season);
export const seasons = Object.values(seasons_object).reverse();

const shorts_obj: Record<string, Metadata> = import.meta.glob('./shorts/*.json', { import: 'default', eager: true });
export const shorts = Object.values(shorts_obj).reverse();

const collections_obj: Record<string, Metadata> = import.meta.glob('./collections/*.json', { import: 'default', eager: true });
export const collections = Object.values(collections_obj).reverse();

const allVideos = [...episodes, ...shorts, ...collections];
const titles = allVideos.map(({ title }) => generateSlug(title));

export function generateSlug(title: string) {
  return slugify(title, { strict: true, lower: true });
}

export function getCurrentEpisode(slug: string) {
  const ind = titles.findIndex((title) => title === slug);
  return allVideos[ind];
}