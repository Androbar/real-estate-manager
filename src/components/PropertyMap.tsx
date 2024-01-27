'use client'

import { Box, Heading, Popover } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
// import "leaflet-defaulticon-compatibility"
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


export default function PropertyMap({ latitude, longitude }: { latitude: number | null, longitude: number | null }) {
  if (!latitude || !longitude) return null;
  return (
    <>
      <Heading size={'md'} mb={3}>Location</Heading>
      <Box h={'500px'}>
        <MapContainer center={[latitude, longitude]} zoom={14} scrollWheelZoom={false} style={{ height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>coso</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </>
  )
}