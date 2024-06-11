'use client'

import { Grid, GridItem, Heading } from '@chakra-ui/react'
import type { Property } from '@prisma/client'
import { PropertyCard } from './PropertyCard'
import useBookmarks from '@/hooks/useBookmarks'
import type { BookmarkProperty } from '@/types/properties'

export const PropertiesListFeatured = ({
  properties,
}: {
  properties: Property[]
}) => {
  const { addBookmark, removeBookmark, bookmarks } = useBookmarks()
  return (
    <>
      <Heading as="h2" size="md" my={4}>
        Featured Properties
      </Heading>
      <Grid
        templateColumns={'repeat(12, 1fr)'}
        templateRows={'repeat(2, 1fr)'}
        gap={6}
      >
        {properties?.map((property: Property, index: number) => {
          const isBookmarked = bookmarks.some(
            (bookmark: BookmarkProperty) =>
              parseInt(bookmark.id) === property.id,
          )
          return (
            <GridItem
              key={property.id}
              rowSpan={index === 0 ? 2 : 1}
              colSpan={index === 0 ? 6 : 3}
            >
              <PropertyCard
                property={property}
                isBookmarked={isBookmarked}
                addBookMark={addBookmark}
                removeBookMark={removeBookmark}
              />
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
