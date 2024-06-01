'use client'

import { OPERATION_TYPES_OPTIONS, PROPERTY_TYPES_OPTIONS } from '@/constants'
import { usePropertiesFilterParams } from '@/hooks/useFilteredProperties'
import type { SelectOption } from '@/types/properties'
import { Button, FormControl, HStack, Link } from '@chakra-ui/react'
import { Select, type ChakraStylesConfig } from 'chakra-react-select'

export default function HeroFilters() {
  const { filterParams, setFilterParams, queryString } =
    usePropertiesFilterParams()

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

  const customStyles: ChakraStylesConfig<SelectOption, false> = {
    container: provided => ({
      ...provided,
      backgroundColor: 'white',
      color: 'grey.800',
    }),
  }

  return (
    <HStack>
      <FormControl>
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
          chakraStyles={customStyles}
          placeholder="Select Operation Type"
        />
      </FormControl>
      <FormControl>
        <Select
          name="propertyType"
          value={{
            label: PROPERTY_TYPES_OPTIONS.find(
              type => type.value === filterParams.propertyType,
            )?.label,
            value: filterParams.propertyType,
          }}
          options={PROPERTY_TYPES_OPTIONS}
          chakraStyles={customStyles}
          onChange={handleSelectPropertyTypeChange}
          size={'sm'}
        />
      </FormControl>
      <Link href={`/properties${queryString && '?' + queryString}`}>
        <Button>Search Properties</Button>
      </Link>
    </HStack>
  )
}
