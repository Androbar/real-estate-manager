import { Box, Heading, Text } from "@chakra-ui/react";
import { Property } from "@prisma/client";

export const PropertyFullAttributes = ({ property }: { property: Property }) => {
  return (
    <Box>
      <Heading size={'sm'}>GENERAL</Heading>
      <Text>Available as of: {property.availableAsOf}</Text>
      <Text>Construction year: {property.constructionYear}</Text>
      <Text>Building condition: {property.buildingCondition}</Text>
      <Text>Street frontage: {property.streetFrontageWidth}</Text>
      <Text>Number of frontages: {property.numberOfFrontages}</Text>
      <Text>Covered parking spaces: {property.coveredParkingSpaces}</Text>
      <Text>Outdoor parking spaces: {property.outdoorParkingSpaces}</Text>
      <Text>Surroundings type: {property.surroundingsType}</Text>
      <Heading size={'sm'}>INTERIOR</Heading>
      <Text>Living area: {property.livingArea}</Text>
      <Text>Living room surface: {property.livingRoomSurface}</Text>
      <Text>Kitchen type: {property.kitchenType}</Text>
      <Text>Kitchen surface: {property.kitchenSurface}</Text>
      <Text>Bedrooms: {property.bedrooms}</Text>
      <Text>Bedroom 1 surface: {property.bedroom1Surface}</Text>
      <Text>Bedroom 2 surface: {property.bedroom2Surface}</Text>
      <Text>Bedroom 3 surface: {property.bedroom3Surface}</Text>
      <Text>Bedroom 4 surface: {property.bedroom4Surface}</Text>
      <Text>Bedroom 5 surface: {property.bedroom5Surface}</Text>
      <Text>Shower rooms: {property.showerRooms}</Text>
      <Text>Bathrooms: {property.bathrooms}</Text>
      <Text>Toilets: {property.toilets}</Text>
      <Text>Office surface: {property.officeSurface}</Text>
      <Text>Office: {property.office ? "Yes" : "No"}</Text>
      <Text>Professional space surface: {property.professionalSpaceSurface}</Text>
      <Text>Attic: {property.attic ? "Yes" : "No"}</Text>
      <Text>Furnished: {property.furnished ? "Yes" : "No"}</Text>
      <Text>Heating type: {property.heatingType}</Text>
      <Heading size={'sm'}>EXTERIOR</Heading>
      <Text>Surface of the plot: {property.surfaceOfThePlot}</Text>
      <Text>Connection to sewer network: {property.connectionToSewerNetwork}</Text>
      <Text>Gas, water & electricity: {property.gasWaterElectricity ? "Yes" : "No"}</Text>
      <Text>Garden surface: {property.gardenSurface}</Text>
      <Text>Terrace surface: {property.terraceSurface}</Text>
      <Heading size={'sm'}>FACILITIES</Heading>
      <Text>Elevator: {property.elevator ? "Yes" : "No"}</Text>
      <Text>Accessible for disabled people: {property.accessibleForDisabled ? "Yes" : "No"}</Text>
      <Text>TV cable: {property.tvCable ? "Yes" : "No"}</Text>
      <Text>Visio phone: {property.visioPhone ? "Yes" : "No"}</Text>
      <Text>Swimming pool: {property.swimmingPool ? "Yes" : "No"}</Text>
      <Heading size={'sm'}>TOWN PLANNING AND RISKS</Heading>
      <Text>Total ground floor buildable: {property.totalGroundFloorBuildable}</Text>
      <Text>Flood zone type: {property.floodZoneType}</Text>
    </Box>
  );
};