export type BlogPost = {
  id: string
  title: string
  slug: string
  imageSrc: string
  publishedAt: string
  summary: string
  body: string
  author: {
    name: string
    avatar: string
  }
}
