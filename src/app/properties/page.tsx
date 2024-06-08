import { PropertiesServer } from '@/components/server/Properties.server'

const Properties = ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) => {
  console.log('searchParams: ', searchParams)
  return <PropertiesServer searchParams={searchParams} />
}

export default Properties
