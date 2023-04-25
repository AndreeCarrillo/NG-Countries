export interface Pais{
    "name": {
        "common": string;
        "official": string;
    };
    "fullname": string;
    "capital": string;
    "area": number;
    "population": number;
    "region":string;
    "subregion":string;
    "tld":string[];
    "currencies": [];
    "borders":string[];
    "flags": {
        alt:string,
        png:string,
        svg:string
    };
}