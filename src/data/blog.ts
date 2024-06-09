import type { BlogPost } from '@/types/blog'

export const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Real Estate: Trends to Watch in 2024',
    slug: 'future-of-real-estate-2024',
    imageSrc: 'https://via.placeholder.com/150',
    publishedAt: '2024-06-08',
    summary:
      'Explore the emerging trends in the real estate market for 2024, including technological advancements, sustainable practices, and shifts in buyer preferences.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.',
    author: {
      name: 'Andres',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    id: '2',
    title:
      'Top Strategies for Selling Your Home Quickly in a Competitive Market',
    slug: 'selling-home-quickly',
    imageSrc: 'https://via.placeholder.com/150',
    publishedAt: '2024-05-20',
    summary:
      'Learn effective strategies to sell your home fast, from staging tips to pricing strategies, ensuring you get the best value in a competitive real estate market.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.',
    author: {
      name: 'Andres',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    id: '3',
    title: 'Renting vs. Buying: Which is the Better Option in 2024?',
    slug: 'renting-vs-buying-2024',
    imageSrc: 'https://via.placeholder.com/150',
    publishedAt: '2024-04-15',
    summary:
      'A comprehensive guide to help you decide whether renting or buying is the better option for you in 2024, considering market conditions, personal circumstances, and financial implications.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.',
    author: {
      name: 'Maria',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    id: '4',
    title: 'How to Invest in Real Estate: A Beginner’s Guide',
    slug: 'investing-in-real-estate',
    imageSrc: 'https://via.placeholder.com/150',
    publishedAt: '2024-03-10',
    summary:
      'This guide covers the basics of real estate investment, including types of properties, financing options, and tips for maximizing your return on investment.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.',
    author: {
      name: 'Andres',
      avatar: 'https://via.placeholder.com/50',
    },
  },
] as const
