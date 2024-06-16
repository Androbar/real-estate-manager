'use client'

import { Box } from '@chakra-ui/react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { PropertyCard } from './PropertyCard'
import type { PropertyWithImages } from '@/types/properties'

export const PropertyListMap = ({
  properties,
}: {
  properties: PropertyWithImages[]
}) => {
  return (
    <Box h={'100%'}>
      <MapContainer
        center={[-24.789134, -65.410782]}
        zoom={14}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map(property => {
          if (!property?.location) return null
          const [latitude, longitude] = property.location.split(',')
          return (
            <Marker
              key={property.id}
              position={[parseInt(latitude), parseInt(longitude)]}
            >
              <Popup>
                <PropertyCard property={property} />
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </Box>
  )
}

// const PropertyPopup = ({ property }: { property: Property }) => {
//   return (
//     <Box>

//       <Text>{property.name}</Text>
//     </Box>
//   )
// }
