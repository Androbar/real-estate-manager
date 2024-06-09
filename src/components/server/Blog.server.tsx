import { POSTS } from '@/data/blog'
import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const BlogServerComponent = async ({ slug }: { slug: string }) => {
  const post = POSTS.find(post => post.slug === slug)

  if (!post) {
    return <div>post not found</div>
  }
  return (
    <Box maxW="6xl" mx="auto" p={8}>
      <Image src={post.imageSrc} alt={post.title} borderRadius="md" mb={8} />
      <Heading as="h1" size="xl" mb={4}>
        {post.title}
      </Heading>
      <Flex alignItems="center" mb={4}>
        <Avatar src={post.author.avatar} name={post.author.name} mr={2} />
        <Text fontWeight="bold">{post.author.name}</Text>
        <Text ml={4} color="gray.500">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Text>
      </Flex>
      <Text>{post.body}</Text>
    </Box>
  )
}

export default BlogServerComponent
