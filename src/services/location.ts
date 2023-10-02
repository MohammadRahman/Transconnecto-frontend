import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function geocodeAddress({ city, country, address }: any) {

    try {
        // console.log("function called")
        const stringiFiedAddress = `${address}, ${city}, ${country}`;
        const encodedAddress = encodeURIComponent(stringiFiedAddress);

        // Make a GET request to Nominatim
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`
        );

        if (response.data && response.data.length > 0) {
            const location = response.data[0];

            const latitude = parseFloat(location.lat);
            const longitude = parseFloat(location.lon);

            return { latitude, longitude };
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        console.error('Geocoding error:', error);
        throw error;
    }
}

