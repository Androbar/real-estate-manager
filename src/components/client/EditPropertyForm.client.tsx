'use client'
import React, { useState } from 'react'
import {
  type PropertyImages,
  type Property,
  type Image as TypeImage,
} from '@prisma/client'

import {
  FormProvider,
  type UseFormSetValue,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Input,
  Button,
  Textarea,
  HStack,
  VStack,
  Heading,
  Grid,
  GridItem,
  Image,
  Tooltip,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

type PropertyImagesWithImage = {
  image: Omit<TypeImage, 'id' | 'createdAt'> & { file?: File }
} & Omit<PropertyImages, 'propertyId' | 'imageId'> & { isNew?: boolean }

type CombinedProperty = {
  propertyImages: PropertyImagesWithImage[]
} & Property

export const PropertyForm = ({ property }: { property?: CombinedProperty }) => {
  const [isAddingImage, setIsAddingImage] = useState(false)

  const methods = useForm({ defaultValues: property })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods

  const propertyImages = useFieldArray({
    control,
    name: 'propertyImages',
  })

  const maxImageOrder = propertyImages?.fields.length
    ? propertyImages.fields[0].order
    : 0

  const onSubmit = (data: Property) => {
    console.log(data)
  }

  const handleAddImageClick = () => {
    propertyImages.append({
      order: maxImageOrder + 1,
      isNew: true,
      image: {
        url: '',
        caption: '',
        filename: '',
        file: undefined,
      },
    })
  }

  const handleCancelImageClick = (index: number) => {
    propertyImages.remove(index)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              // disabled={mutation.isLoading}
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Description */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.description}>
            <FormLabel htmlFor="name">Description</FormLabel>
            <Textarea
              id="description"
              // disabled={mutation.isLoading}
              placeholder="Description"
              {...register('description', {
                required: 'Description is required',
              })}
            />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Address */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.address}>
            <FormLabel htmlFor="name">Address</FormLabel>
            <Input
              id="address"
              // disabled={mutation.isLoading}
              placeholder="Description"
              {...register('address', { required: 'Address is required' })}
            />
            <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.city}>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              // disabled={mutation.isLoading}
              placeholder="City"
              {...register('city')}
            />
            <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Map to move and select location */}
        <Text>
          This will be replaced with a map to move and select location
        </Text>
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.latitude}>
            <FormLabel htmlFor="latitude">Latitude</FormLabel>
            <Input
              id="latitude"
              // disabled={mutation.isLoading}
              placeholder="Latitude"
              {...register('latitude')}
            />
            <FormErrorMessage>{errors.latitude?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.longitude}>
            <FormLabel htmlFor="longitude">Longitude</FormLabel>
            <Input
              id="longitude"
              // disabled={mutation.isLoading}
              placeholder="Longitude"
              {...register('longitude')}
            />
            <FormErrorMessage>{errors.longitude?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Pricing */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.price}>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Input
              id="price"
              // disabled={mutation.isLoading}
              placeholder="Price"
              {...register('price')}
            />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.expenses}>
            <FormLabel htmlFor="expenses">Expenses</FormLabel>
            <Input
              id="expenses"
              // disabled={mutation.isLoading}
              placeholder="Expenses"
              {...register('expenses')}
            />
            <FormErrorMessage>{errors.expenses?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.currency}>
            <FormLabel htmlFor="currency">Currency</FormLabel>
            <Input
              id="currency"
              // disabled={mutation.isLoading}
              placeholder="Currency"
              {...register('currency')}
            />
            <FormErrorMessage>{errors.currency?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Operation */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.operationType}>
            <FormLabel htmlFor="operationType">Operation Type</FormLabel>
            <Input
              id="operationType"
              // disabled={mutation.isLoading}
              placeholder="Operation Type"
              {...register('operationType')}
            />
            <FormErrorMessage>{errors.operationType?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.type}>
            <FormLabel htmlFor="type">Property Type</FormLabel>
            <Input
              id="type"
              // disabled={mutation.isLoading}
              placeholder="Property Type"
              {...register('type')}
            />
            <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Area */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.areaTotal}>
            <FormLabel htmlFor="areaTotal">Area Total</FormLabel>
            <Input
              id="areaTotal"
              // disabled={mutation.isLoading}
              placeholder="Area Total"
              {...register('areaTotal')}
            />
            <FormErrorMessage>{errors.areaTotal?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.areaCovered}>
            <FormLabel htmlFor="areaCovered">Area Covered</FormLabel>
            <Input
              id="areaCovered"
              // disabled={mutation.isLoading}
              placeholder="Area Covered"
              {...register('areaCovered')}
            />
            <FormErrorMessage>{errors.areaCovered?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Other attributes */}
        <HStack pb={5}>
          <FormControl isInvalid={!!errors.roomsTotal}>
            <FormLabel htmlFor="roomsTotal">Total Rooms</FormLabel>
            <Input
              id="roomsTotal"
              // disabled={mutation.isLoading}
              placeholder="Total Rooms"
              {...register('roomsTotal')}
            />
            <FormErrorMessage>{errors.roomsTotal?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.rooms}>
            <FormLabel htmlFor="rooms">Rooms</FormLabel>
            <Input
              id="rooms"
              // disabled={mutation.isLoading}
              placeholder="Rooms"
              {...register('rooms')}
            />
            <FormErrorMessage>{errors.rooms?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.bathrooms}>
            <FormLabel htmlFor="bathrooms">Bathrooms</FormLabel>
            <Input
              id="bathrooms"
              // disabled={mutation.isLoading}
              placeholder="Bathrooms"
              {...register('bathrooms')}
            />
            <FormErrorMessage>{errors.bathrooms?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.yearsBuilt}>
            <FormLabel htmlFor="yearsBuilt">Building age</FormLabel>
            <Input
              id="yearsBuilt"
              // disabled={mutation.isLoading}
              placeholder="Building age"
              {...register('yearsBuilt')}
            />
            <FormErrorMessage>{errors.yearsBuilt?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.propertyFacing}>
            <FormLabel htmlFor="propertyFacing">Property Facing</FormLabel>
            <Input
              id="propertyFacing"
              // disabled={mutation.isLoading}
              placeholder="Property Facing"
              {...register('propertyFacing')}
            />
            <FormErrorMessage>
              {errors.propertyFacing?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.carport}>
            <FormLabel htmlFor="carport">Carport</FormLabel>
            <Input
              id="carport"
              // disabled={mutation.isLoading}
              placeholder="Carport"
              {...register('carport')}
            />
            <FormErrorMessage>{errors.carport?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.orientation}>
            <FormLabel htmlFor="orientation">Orientation</FormLabel>
            <Input
              id="orientation"
              // disabled={mutation.isLoading}
              placeholder="Orientation"
              {...register('orientation')}
            />
            <FormErrorMessage>{errors.orientation?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        {/* Gallery */}
        <Heading size="md">Gallery</Heading>
        <VStack pb={5}>
          {propertyImages.fields?.map((item, idx) => {
            return (
              <PropertyImageForm
                key={idx}
                index={idx ?? 0}
                image={item}
                imageMode={item.isNew ? 'edit' : 'read'}
                handleCancelImageClick={() => {
                  item.isNew && handleCancelImageClick(idx)
                }}
                setValue={methods.setValue}
              />
            )
          })}
          {!isAddingImage && (
            <Button colorScheme="green" onClick={handleAddImageClick}>
              Add image
            </Button>
          )}
        </VStack>
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}

const PropertyImageForm = ({
  index,
  image,
  imageMode,
  maxImageOrder,
  handleCancelImageClick,
  setValue,
}: {
  index: number
  image?: PropertyImagesWithImage
  imageMode?: 'edit' | 'read'
  maxImageOrder?: number
  handleCancelImageClick?: () => void
  setValue?: UseFormSetValue<CombinedProperty>
}) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const [mode, setMode] = useState<'edit' | 'read'>(imageMode ?? 'read')
  // type PropertyImagesWithImage = {
  //   image: {
  //     filename: string
  //     url: string
  //     caption: string | null
  //   }
  //   order: number
  //   isNew?: boolean | undefined
  // }
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    console.log('index:', index)
    console.log('event:', event)
    // set value to property images based on index
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setValue &&
        setValue(`propertyImages.${index}.image.filename`, selectedFile.name)
      setValue && setValue(`propertyImages.${index}.image.file`, selectedFile)
      const reader = new FileReader()
      reader.onload = event => {
        setThumbnail(event?.target?.result as string) // Set thumbnail URL
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleCancelEditMode = () => {
    if (handleCancelImageClick) {
      handleCancelImageClick()
    } else {
      setMode('read')
    }
  }

  return (
    <>
      <Grid w="100%" h="100%" gap={2} gridTemplateColumns={'repeat(12, 1fr)'}>
        <GridItem colSpan={1}>Order</GridItem>
        <GridItem colSpan={3}>Filename</GridItem>
        <GridItem colSpan={4}>Caption</GridItem>
        <GridItem colSpan={2}>Thumbnail</GridItem>
        <GridItem colSpan={2}>Actions</GridItem>
      </Grid>
      <Grid
        pb={5}
        w="100%"
        h="100%"
        gap={2}
        gridTemplateColumns={'repeat(12, 1fr)'}
      >
        <GridItem colSpan={1}>
          <FormControl isInvalid={!!errors.propertyImages}>
            <Input
              id={`propertyImages.${index}.order`}
              // disabled={mutation.isLoading}
              placeholder="Order"
              {...register(`propertyImages.${index}.order`)}
            />
            <FormErrorMessage>{'errors.propertyImages'}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
          <FormControl isInvalid={!!errors.propertyImages}>
            <Input
              id={`propertyImages.${index}.image.file`}
              // disabled={mutation.isLoading}
              placeholder="Filename"
              type="file"
              accept="image/*"
              onChange={event => {
                handleFileChange(event, index)
              }}
              // {...register(`propertyImages.${index}.image.file`)}
            />
            <FormErrorMessage>
              {errors.propertyImages?.type === 'unsupportedFileType' && (
                <p>Only image files are allowed.</p>
              )}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl isInvalid={!!errors.propertyImages}>
            <Input
              id={`propertyImages.${index}.image.caption`}
              // disabled={mutation.isLoading}
              placeholder="Caption"
              {...register(`propertyImages.${index}.image.caption`)}
            />
            <FormErrorMessage>{'errors.propertyImages'}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          {thumbnail && <Image src={thumbnail} />}
        </GridItem>
        <GridItem colSpan={2}>
          <HStack>
            {mode === 'read' ? (
              <>
                <Tooltip hasArrow label="Edit" bg="gray.300" color="black">
                  <Button
                    size="sm"
                    onClick={() => {
                      setMode('edit')
                    }}
                  >
                    <EditIcon />
                  </Button>
                </Tooltip>
                <Tooltip hasArrow label="Delete" bg="gray.300" color="black">
                  <Button size="sm">
                    <DeleteIcon />
                  </Button>
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip hasArrow label="Confirm" bg="gray.300" color="black">
                  <Button size="sm">
                    <CheckIcon />
                  </Button>
                </Tooltip>
                <Tooltip hasArrow label="Cancel" bg="gray.300" color="black">
                  <Button size="sm" onClick={handleCancelEditMode}>
                    <CloseIcon />
                  </Button>
                </Tooltip>
              </>
            )}
          </HStack>
        </GridItem>
      </Grid>
      <div>edit abre form con dropzone, edit caption</div>
      <div>delete elimina la imagen y el property image</div>
      <div>tambien ver de hacer drag and drop por el orden</div>
    </>
  )
}
