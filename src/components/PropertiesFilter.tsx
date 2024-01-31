import { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Box, Card, CardBody, CardHeader, FormControl, FormLabel, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import { FilterParams } from '@/app/properties/page';
import { debounce } from 'lodash';
import { Select } from 'chakra-react-select';

export type PropertiesFilterProps = {
  filterParams: FilterParams;
  setFilterParams: Dispatch<SetStateAction<FilterParams>>;
}

const OPERATION_TYPES_OPTIONS = [
  { value: 'SALE', label: 'Sale' },
  { value: 'RENT', label: 'Rent' },
] as const;

const PROPERTY_TYPES_OPTIONS = [
  { value: 'HOUSE', label: 'House' },
  { value: 'APARTMENT', label: 'Apartment' },
  { value: 'OFFICE', label: 'Office' },
  { value: 'WAREHOUSE', label: 'Warehouse' },
  { value: 'LAND', label: 'Land' },
] as const;

export type SelectOption = {
  value: string | undefined;
  label: string | undefined;
}

export const PropertiesFilter = ({ filterParams, setFilterParams }: PropertiesFilterProps) => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sizeRange, setSizeRange] = useState([0, 1000]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectOperationTypeChange = (option: SelectOption | null) => {
    if (option === null) {
      return;
    }
    setFilterParams(prev => ({
     ...prev,
      operationType: option.value
    }));
  };

  const handleSelectPropertyTypeChange = (option: SelectOption | null) => {
    if (option === null) {
      return;
    }
    setFilterParams(prev => ({
     ...prev,
      propertyType: option.value
    }));
  };
  const debouncedSetFilterParams = useCallback(
    debounce((newParams) => {
      setFilterParams(newParams);
    }, 500),
    []
  );

  const handlePriceRangeChange = (values: number[]) => {
    const [min, max] = values;
    const priceMin = min.toString();
    const priceMax = max.toString();
    setPriceRange([min, max]);
    debouncedSetFilterParams((prev: FilterParams) => ({
      ...prev,
      priceMin: priceMin,
      priceMax: priceMax
    }));
  };

  
  const handleSizeRangeChange = (values: number[]) => {
    const [min, max] = values;
    const sizeMin = min.toString();
    const sizeMax = max.toString();
    setSizeRange([min, max]);
    debouncedSetFilterParams((prev: FilterParams) => ({
      ...prev,
      sizeMin: sizeMin,
      sizeMax: sizeMax
    }));
  };

  useEffect(() => {
    return () => {
      debouncedSetFilterParams.cancel();
    };
  }, [debouncedSetFilterParams]);


  return (
    <Card>
      <CardHeader>
        <Heading size='sm'>Filter Properties</Heading>
      </CardHeader>
      <CardBody>

        <Box>
          <FormControl>
            <FormLabel>Operation Type</FormLabel>
            <Select
              name="operationType"
              value={{
                label: OPERATION_TYPES_OPTIONS.find(type => type.value === filterParams.operationType)?.label,
                value:filterParams.operationType
              }}
              options={OPERATION_TYPES_OPTIONS}
              onChange={(value) => handleSelectOperationTypeChange(value)}
              size={'sm'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Property Type</FormLabel>
            <Select
              name="propertyType"
              value={{
                label: PROPERTY_TYPES_OPTIONS.find(type => type.value === filterParams.propertyType)?.label,
                value:filterParams.propertyType
              }}
              options={PROPERTY_TYPES_OPTIONS}
              onChange={(value) => handleSelectPropertyTypeChange(value)}
              size={'sm'}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Price Range</FormLabel>
            <RangeSlider
              aria-label={['min', 'max']}
              value={priceRange}
              defaultValue={[0, 300]}
              min={0}
              max={300}
              onChange={handlePriceRangeChange}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </FormControl>
          <FormControl>
            <FormLabel>Size Range</FormLabel>
            <RangeSlider
              aria-label={['min', 'max']}
              value={sizeRange}
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
              onChange={handleSizeRangeChange}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </FormControl>
          <FormControl>
            <FormLabel>Bedrooms</FormLabel>
            <Input name="bedrooms" value={filterParams.bedrooms} onChange={handleFilterChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Bathrooms</FormLabel>
            <Input name="bathrooms" value={filterParams.bathrooms} onChange={handleFilterChange} />
          </FormControl>
          {/* <input name="priceMin" value={filterParams.priceMin} onChange={handleFilterChange} />
        <input name="priceMax" value={filterParams.priceMax} onChange={handleFilterChange} /> */}
        </Box>
      </CardBody>
    </Card>
  );
};
