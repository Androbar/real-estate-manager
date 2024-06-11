'use client'

import { Grid, GridItem } from '@chakra-ui/react'
import type { Property } from '@prisma/client'
import { PropertyCard } from './PropertyCard'
import useBookmarks from '@/hooks/useBookmarks'
import type { BookmarkProperty } from '@/types/properties'

export const PropertiesList = ({ properties }: { properties: Property[] }) => {
  const { addBookmark, removeBookmark, bookmarks } = useBookmarks()
  return (
    <Grid templateColumns={'repeat(12, 1fr)'} gap={6}>
      {properties?.map((property: Property) => {
        const isBookmarked = bookmarks.some(
          (bookmark: BookmarkProperty) => parseInt(bookmark.id) === property.id,
        )
        return (
          <GridItem key={property.id} colSpan={4}>
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
