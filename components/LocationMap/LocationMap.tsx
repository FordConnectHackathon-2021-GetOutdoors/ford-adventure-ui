import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export const LocationMap = ({
  lat = 10.99835602,
  lng = 77.01502627,
  handleApiLoaded = (map: any, maps: any) => {},
}) => {
  return (
    <Box w="100%" h="170px" borderRadius="xl" overflow="hidden">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_FORD_GOOGLE_MAPS,
        }}
        defaultCenter={{
          lat,
          lng,
        }}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent>MARKER</AnyReactComponent>
      </GoogleMapReact>
    </Box>
  );
};
