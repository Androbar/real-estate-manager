import { type ChangeEvent, useCallback, useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardBody,
  Text,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import { debounce } from 'lodash'
import { Select } from 'chakra-react-select'
import { formatNumber } from '@/utils/utils'
import type { FilterParams, SelectOption } from '@/types/properties'
import { OPERATION_TYPES_OPTIONS, PROPERTY_TYPES_OPTIONS } from '@/constants'

export type PropertiesFilterProps = {
  filterParams: FilterParams
  setFilterParams: (newParams: Partial<FilterParams>) => void
  maxPrice?: number
  maxSize?: number
}

export const PropertiesFilter = ({
  filterParams,
  setFilterParams,
  maxPrice = 1000000,
  maxSize = 1000,
}: PropertiesFilterProps) => {
  const [priceRange, setPriceRange] = useState([0, maxPrice])
  const [sizeRange, setSizeRange] = useState([0, maxSize])

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFilterParams({ [name]: value })
  }

  const handleSelectOperationTypeChange = (option: SelectOption | null) => {
    if (option) {
      setFilterParams({ operationType: option.value })
    }
  }

  const handleSelectPropertyTypeChange = (option: SelectOption | null) => {
    if (option) {
      setFilterParams({ propertyType: option.value })
    }
  }
  const debouncedSetFilterParams = useCallback(
    debounce((newParams: Partial<FilterParams>) => {
      setFilterParams(newParams)
    }, 500),
    [],
  )

  const handlePriceRangeChange = (values: number[]) => {
    const [min, max] = values
    const priceMin = min.toString()
    const priceMax = max.toString()
    setPriceRange([min, max])
    debouncedSetFilterParams({ priceMin, priceMax })
  }

  const handleSizeRangeChange = (values: number[]) => {
    const [min, max] = values
    const sizeMin = min.toString()
    const sizeMax = max.toString()
    setSizeRange([min, max])
    debouncedSetFilterParams({ sizeMin, sizeMax })
  }

  useEffect(() => {
    return () => {
      debouncedSetFilterParams.cancel()
    }
  }, [debouncedSetFilterParams])

  return (
    <Card>
      <CardHeader>
        <Heading size="sm">Filter Properties</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <FormControl>
            <FormLabel>Operation Type</FormLabel>
            <Select
              name="operationType"
              value={{
                label: OPERATION_TYPES_OPTIONS.find(
                  type => type.value === filterParams.operationType,
                )?.label,
                value: filterParams.operationType,
              }}
              options={OPERATION_TYPES_OPTIONS}
              onChange={handleSelectOperationTypeChange}
              size={'sm'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Property Type</FormLabel>
            <Select
              name="propertyType"
              value={{
                label: PROPERTY_TYPES_OPTIONS.find(
                  type => type.value === filterParams.propertyType,
                )?.label,
                value: filterParams.propertyType,
              }}
              options={PROPERTY_TYPES_OPTIONS}
              onChange={handleSelectPropertyTypeChange}
              size={'sm'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Price Range</FormLabel>
            <Box position={'relative'} pt={5}>
              <RangeSlider
                aria-label={['min', 'max']}
                value={priceRange}
                defaultValue={[0, maxPrice]}
                min={0}
                max={maxPrice}
                onChange={handlePriceRangeChange}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Box position={'absolute'} top={0} left={0} height={2}>
                <Text>$ {formatNumber(priceRange[0])}</Text>
              </Box>
              <Box position={'absolute'} top={0} right={0} height={2}>
                <Text>$ {formatNumber(priceRange[1])}</Text>
              </Box>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Size Range</FormLabel>
            <Box position={'relative'} pt={5}>
              <RangeSlider
                aria-label={['min', 'max']}
                value={sizeRange}
                defaultValue={[0, maxSize]}
                min={0}
                max={maxSize}
                onChange={handleSizeRangeChange}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Box position={'absolute'} top={0} left={0} height={2}>
                <Text>{formatNumber(sizeRange[0], ',', '.', false)}m2</Text>
              </Box>
              <Box position={'absolute'} top={0} right={0} height={2}>
                <Text>{formatNumber(sizeRange[1], ',', '.', false)}m2</Text>
              </Box>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Bedrooms</FormLabel>
            <Input
              name="bedrooms"
              value={filterParams.bedrooms}
              onChange={handleFilterChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Bathrooms</FormLabel>
            <Input
              name="bathrooms"
              value={filterParams.bathrooms}
              onChange={handleFilterChange}
            />
          </FormControl>
          {/* <input name="priceMin" value={filterParams.priceMin} onChange={handleFilterChange} />
        <input name="priceMax" value={filterParams.priceMax} onChange={handleFilterChange} /> */}
        </Box>
      </CardBody>
    </Card>
  )
}
