import PropertyServerComponent from '@/components/server/Property.server'

export default function Property({ params }: { params: { slug: string } }) {
  const { slug } = params

  return (
    <>
      <PropertyServerComponent slug={slug} />
    </>
  )
}
