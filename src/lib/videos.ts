export type EPISODE_TYPE = {
  episode: number;
  season: number;
  id: string;
};

export type SEASON_TYPE = Array<Array<EPISODE_TYPE>>;

export const episodes: SEASON_TYPE = [
  [
    {
      episode: 1,
      season: 1,
      id: "Iw6uTW_CWoM",
    },
    {
      episode: 2,
      season: 1,
      id: "ulOpNfz64gA",
    },
    {
      episode: 3,
      season: 1,
      id: "mnTh5r6sJac",
    },
    {
      episode: 3,
      season: 1,
      id: "oTZmI-rMwBc",
    },
    {
      episode: 3,
      season: 1,
      id: "ysIQeRAk-Cg",
    },
    {
      episode: 3,
      season: 1,
      id: "xEY_IpEqqGM",
    },
  ],
  [
    {
      episode: 1,
      season: 2,
      id: "Iw6uTW_CWoM",
    },
    {
      episode: 2,
      season: 2,
      id: "ulOpNfz64gA",
    },
    {
      episode: 3,
      season: 2,
      id: "Iw6uTW_CWoM",
    },
  ],
];

export const last_season_index = episodes.length - 1;
export const last_episode_index = episodes[last_season_index].length - 1;
