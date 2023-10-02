const API_KEY = 'a5e21f89485d4c86b5730ed3d954ce66'
export function createUrl(baseUrl: string, location: string): string {
    const url = new URL(baseUrl)
    url.searchParams.set('api_key', API_KEY)
    if (location != null) {
        url.searchParams.set('location', location)
    }
    return url.toString();
}