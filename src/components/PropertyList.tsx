'use client'

import { Grid, GridItem } from '@chakra-ui/react'
import { PropertyCard } from './PropertyCard'
import useBookmarks from '@/hooks/useBookmarks'
import type { BookmarkProperty, PropertyWithImages } from '@/types/properties'

export const PropertiesList = ({
  properties,
}: {
  properties: PropertyWithImages[]
}) => {
  const { addBookmark, removeBookmark, bookmarks } = useBookmarks()
  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={6}>
      {properties?.map(property => {
        const isBookmarked = bookmarks.some(
          (bookmark: BookmarkProperty) => parseInt(bookmark.id) === property.id,
        )
        return (
          <GridItem key={property.id} colSpan={{ base: 12, md: 6, lg: 3 }}>
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
  )
}
