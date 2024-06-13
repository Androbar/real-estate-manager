import { POSTS } from '@/data/blog'
import type { BlogPost } from '@/types/blog'
import {
  Box,
  Heading,
  Image,
  Text,
  Container,
  Flex,
  Button,
} from '@chakra-ui/react'

function BlogPosts({
  direction = 'row',
  maxImgHeight = 'auto',
}: {
  direction?: 'row' | 'column'
  maxImgHeight?: string
}) {
  return (
    <Container maxW="6xl" my={6}>
      <Flex gap={6} direction={direction}>
        {POSTS.map(post => (
          <BlogPostCard
            key={post.slug}
            post={post}
            maxImgHeight={maxImgHeight}
          />
        ))}
      </Flex>
    </Container>
  )
}

interface BlogPostCardProps {
  post: BlogPost
  maxImgHeight: string
}

function BlogPostCard({ post, maxImgHeight }: BlogPostCardProps) {
  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Image
        src={post.imageSrc}
        alt={post.title}
        borderRadius={4}
        maxH={maxImgHeight}
        maxW={'100%'}
        w={'100%'}
        objectFit="cover"
      />
      <Heading size="md" mt={2}>
        {post.title}
      </Heading>
      <Text mt={2}>By {post.author.name}</Text>
      <Text mt={1}>Published at {post.publishedAt}</Text>
      <Text mt={2}>{post.summary}</Text>
      <Button
        mt={4}
        colorScheme="teal"
        size="md"
        as="a"
        href={`/blog/${post.slug}`}
      >
        Read More
      </Button>
    </Box>
  )
}

export default BlogPosts
