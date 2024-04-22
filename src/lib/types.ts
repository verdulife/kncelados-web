export interface Metadata {
  id: string,
  title: string,
  description: string,
  image: string,
  url: string
}

export interface Episode extends Metadata {
  episode: number,
  season: number
}