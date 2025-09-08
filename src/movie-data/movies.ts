export type Movie = {
   id: number | string;
   img: string;
   name: string;
   genres: string[];
   cast: string[];
   description: string;
   runtime:string;
   year: number;
   trailer?: string;
}