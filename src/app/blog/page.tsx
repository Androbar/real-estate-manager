import BlogPosts from '@/components/client/BlogPosts'
import { Box, Grid } from '@chakra-ui/react'

const BlogPage = () => {
  return (
    <Grid templateColumns="8fr 4fr">
      <Box>
        <BlogPosts direction="column" maxImgHeight="300px" />
      </Box>
      <Box>{/* Sidebar for contact form */}</Box>
    </Grid>
  )
}

export default BlogPage
