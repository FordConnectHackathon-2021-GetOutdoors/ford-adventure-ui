// @ts-nocheck
import { createContext } from "react";
import Geocode from "react-geocode";
import { GoogleApiWrapper } from "google-maps-react";
import { CircularProgress } from "@chakra-ui/react";
import colors from "themes/colors";

export const MapContext = createContext({
    getShortLocationPromise: (lat, lng): Promise<string>  => {},
});

export function MapProvider({ children }) {
    const getShortLocationPromise = (lat, lng): Promise<string> => {
        Geocode.setApiKey("AIzaSyBBsK9TYVCV2Ug0OuDrOUG90iAXzgnm0Vc");
        return new Promise((resolve, reject) => {
            Geocode.fromLatLng(lat, lng).then(
                (response) => {
                    const address = response.results[0].formatted_address;
                    let city, state, country;
                    for (let i = 0; i < response.results[0].address_components.length; i++) {
                        for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                        switch (response.results[0].address_components[i].types[j]) {
                            case "locality":
                            city = response.results[0].address_components[i].long_name;
                            break;
                            case "administrative_area_level_1":
                            state = response.results[0].address_components[i].long_name;
                            break;
                            case "country":
                            country = response.results[0].address_components[i].long_name;
                            break;
                        }
                        }
                    }
                    resolve(`${city}, ${state}`);
                },
                (error) => {
                    reject(error);
                }
            ).catch(e => console.log(e));
        });
    };
    return (
        <MapContext.Provider
            value={{
                getShortLocationPromise,
            }}
        >
        {children}
        </MapContext.Provider>
    );
};

const LoadingContainer = (props) => (
    <CircularProgress isIndeterminate color={colors.bg.darknavy} />
)
   
export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    LoadingContainer: LoadingContainer
})(MapProvider)