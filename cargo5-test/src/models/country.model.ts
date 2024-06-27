export interface Country {
    name: {
        common: String
    },
    capital: String[];
    cca3: string;
    flags: {
        alt: string,
        png: string,
        svg: string
    },
    population: number,
    region: string;
}