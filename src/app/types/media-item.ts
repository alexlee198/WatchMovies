export type MediaItem ={
    id:number | string;
    name: string;
    genres:string[]
    img:string;
    type: 'movie' | 'show';
    season?: number;
    episode?:number;

}
