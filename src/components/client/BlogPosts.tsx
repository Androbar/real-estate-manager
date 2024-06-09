import { POSTS } from '@/data/blog'
import type { BlogPost } from '@/types/blog'
import { Box, Heading, Image, Text, Container, Flex } from '@chakra-ui/react'

function BlogPosts() {
  return (
    <Container maxW="6xl" my={6}>
      <Flex gap={6}>
        {POSTS.map(post => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </Flex>
    </Container>
  )
}

interface BlogPostCardProps {
  post: BlogPost
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Image src={post.imageSrc} alt={post.title} borderRadius={4} />
      <Heading size="md" mt={2}>
        {post.title}
      </Heading>
      <Text mt={2}>By {post.author.name}</Text>
      <Text mt={1}>Published at {post.publishedAt}</Text>
      <Text mt={2}>{post.summary}</Text>
    </Box>
  )
}

export default BlogPosts
