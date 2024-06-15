import { useState, useEffect, useCallback } from 'react'
import { useProperties } from '@/hooks/useProperties'
import type { FilterParams, PropertyWithImages } from '@/types/properties'

export const usePropertiesFilterParams = (initialParams?: FilterParams) => {
  const [filterParams, setFilterParams] = useState<FilterParams>(
    initialParams || {},
  )
  const { data, isLoading, isError } = useProperties(filterParams)

  const handleSetFilterParams = useCallback(
    (newParams: Partial<FilterParams>) => {
      setFilterParams(prevParams => ({
        ...prevParams,
        ...newParams,
      }))
    },
    [],
  )
  const createQueryString = useCallback((params: FilterParams) => {
    const queryParams = new URLSearchParams()
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        queryParams.append(key, value.toString())
      }
    }
    return queryParams.toString()
  }, [])
  const queryString = createQueryString(filterParams)

  useEffect(() => {
    // Potentially trigger other side-effects when filterParams changes
  }, [filterParams])

  return {
    filterParams,
    setFilterParams: handleSetFilterParams,
    queryString,
    properties: data?.data as PropertyWithImages[],
    isLoading,
    isError,
  }
}
