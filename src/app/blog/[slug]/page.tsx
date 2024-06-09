import BlogServerComponent from '@/components/server/Blog.server'

export default function Property({ params }: { params: { slug: string } }) {
  const { slug } = params

  return (
    <>
      <BlogServerComponent slug={slug} />
    </>
  )
}
