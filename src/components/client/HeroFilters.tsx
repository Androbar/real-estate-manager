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
      borderRadius: '10px',
    }),
  }
  const operationTypeValue = filterParams.operationType
    ? {
        label: OPERATION_TYPES_OPTIONS.find(
          type => type.value === filterParams.operationType,
        )?.label,
        value: filterParams.operationType,
      }
    : null
  const propertyTypeValue = filterParams.propertyType
    ? {
        label: PROPERTY_TYPES_OPTIONS.find(
          type => type.value === filterParams.propertyType,
        )?.label,
        value: filterParams.propertyType,
      }
    : null

  return (
    <HStack w={'100%'}>
      <FormControl flex={'2'}>
        <Select
          name="operationType"
          value={operationTypeValue}
          placeholder="Select Operation Type"
          options={OPERATION_TYPES_OPTIONS}
          onChange={handleSelectOperationTypeChange}
          size={'md'}
          chakraStyles={customStyles}
        />
      </FormControl>
      <FormControl flex={'2'}>
        <Select
          name="propertyType"
          value={propertyTypeValue}
          placeholder="Select Property Type"
          options={PROPERTY_TYPES_OPTIONS}
          chakraStyles={customStyles}
          onChange={handleSelectPropertyTypeChange}
          size={'md'}
        />
      </FormControl>
      <Link href={`/properties${queryString && '?' + queryString}`} flex={'1'}>
        <Button>Search Properties</Button>
      </Link>
    </HStack>
  )
}
