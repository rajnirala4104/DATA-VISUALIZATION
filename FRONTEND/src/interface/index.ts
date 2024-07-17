export interface dataSingleObject {
   end_year?: string,
   intensity?: number,
   sector?: string,
   topic?: string,
   insight?: string,
   url?: string,
   region?: string,
   start_year?: string,
   impact?: string,
   added?: string,
   published?: string,
   country?: string,
   relevance?: number,
   pestle?: string,
   source?: string,
   title?: string,
   likelihood?: number
}

export interface allTheFilterDistinctDataInterface {
   end_year: string[],
   topic: string[],
   region: string[],
   country: string[],
   source: string[],
   pestle: string[],
   sector: string[],
   intensity: string[]
}

export interface setSelectedValueObject {
   key: string,
   value: string
}