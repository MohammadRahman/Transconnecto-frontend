export interface OfficeI{
    name: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number
}
export interface OfficeDI{
    name: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    distance: string
}
export interface CountryI {
    country: string;
    timezone: string;
}