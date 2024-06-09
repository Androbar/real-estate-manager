import type { BlogPost } from '@/types/blog'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ante in sem semper varius. Fusce laoreet luctus fringilla. Quisque pulvinar, purus at maximus dictum, mi turpis consectetur odio, eu facilisis dui nisi eget neque. Etiam vehicula dui sem, ac aliquet lacus pellentesque accumsan. Proin bibendum accumsan odio, quis consequat magna interdum sit amet. Maecenas sapien mauris, vestibulum eget eros a, lacinia pellentesque purus. Praesent gravida, erat ut sagittis aliquet, nulla elit sodales nisl, vel sodales turpis leo eget urna. Donec eleifend ligula faucibus velit fringilla molestie. Vivamus convallis, risus quis accumsan molestie, est nisl blandit sapien, nec pulvinar ipsum diam non nibh. Mauris ut tellus dolor. Quisque facilisis tempor ex, eu viverra turpis ultricies ut. Morbi sit amet arcu ac augue porttitor ornare sed at libero. Fusce congue feugiat velit in imperdiet. Maecenas pharetra metus vel odio efficitur, vel maximus nunc vehicula. Mauris laoreet mattis hendrerit.

Vivamus sed ipsum a urna faucibus venenatis eu at metus. Nunc at accumsan purus. In lorem diam, porttitor et imperdiet a, interdum facilisis lectus. Proin feugiat cursus bibendum. Phasellus gravida varius orci nec fermentum. Sed ligula lorem, pulvinar condimentum nibh a, luctus rutrum neque. Cras finibus orci ut lacus congue varius.

Mauris dapibus malesuada justo a pulvinar. Sed dolor augue, gravida a porta quis, rutrum et mauris. Mauris tincidunt et velit a elementum. Phasellus at risus cursus, ullamcorper libero in, euismod tellus. Pellentesque molestie purus vitae mauris tristique, a posuere metus maximus. Vestibulum vulputate posuere lectus. Ut ac risus erat.

Nullam sed dolor mollis, ornare erat ut, sollicitudin magna. Maecenas mauris ex, ullamcorper eu consequat nec, porttitor in neque. Etiam efficitur et turpis cursus volutpat. Ut varius vitae enim et iaculis. Morbi efficitur rutrum mauris, quis iaculis leo sodales in. Integer semper porttitor justo nec ultrices. Nunc vel dignissim turpis. Donec finibus ligula ut purus varius, eget sollicitudin odio pellentesque.

Donec id mauris accumsan, suscipit quam at, dapibus augue. Morbi ut sodales elit. Phasellus tincidunt ex sit amet nulla scelerisque tincidunt. Sed venenatis pretium nisi non dignissim. Donec pretium mi pharetra, condimentum mauris pretium, dapibus erat. Nam aliquam tellus mauris, id sollicitudin dolor dapibus eget. Aliquam iaculis tincidunt ligula, vitae aliquam erat pharetra eget. Sed in vestibulum lectus, vel pharetra est. Nam egestas semper elit, a aliquet dui lacinia blandit. Aliquam et cursus risus.

Nunc dolor sapien, laoreet nec erat et, accumsan lobortis eros. Sed malesuada placerat nibh, a placerat purus tristique ut. Nulla magna nibh, laoreet ac eros quis, maximus consectetur elit. In nibh ligula, aliquet tincidunt faucibus non, mollis ut elit. Vivamus vitae vulputate justo. Donec vehicula consectetur bibendum. Quisque ullamcorper, augue quis sollicitudin molestie, odio massa pharetra velit, congue condimentum nisi neque quis ligula. Mauris imperdiet nisi sem, id sodales mauris pharetra eu.

Aliquam nec neque turpis. Ut sed lectus risus. Aliquam vitae condimentum sapien. Sed interdum libero nec neque dignissim, in euismod libero fermentum. Duis sed dolor ac ligula hendrerit convallis vitae quis eros. Nunc quis mattis mauris. Suspendisse potenti. Integer in erat ut velit eleifend tristique sit amet semper metus. Integer tristique sem nec felis rutrum rutrum. Sed quam ligula, luctus tempor libero eget, viverra sagittis tellus. Maecenas cursus sapien lectus, in porta ex pretium et. In scelerisque blandit imperdiet. Nam tincidunt cursus est ac interdum. In ut nibh augue. Ut condimentum nibh sapien, nec consectetur risus auctor non. Sed scelerisque, ex nec ornare cursus, magna nibh posuere lorem, quis efficitur ipsum ex eget lacus.

Sed at dapibus velit. Sed ac dolor sit amet ex molestie aliquam. Ut id metus eleifend, gravida nibh eu, convallis nisl. Maecenas aliquam molestie augue vitae laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero velit, vehicula ut finibus sed, auctor nec magna. Maecenas bibendum tortor id felis convallis, nec condimentum enim molestie. Etiam accumsan ligula sem, sed maximus ipsum dapibus eget. Quisque vel ipsum dui.

Nam pretium accumsan turpis, eu aliquet metus blandit non. Sed convallis facilisis quam, quis tincidunt lectus suscipit eu. Sed elementum lectus id odio tincidunt pulvinar. Nullam at turpis vitae ipsum condimentum venenatis. Quisque et auctor ex. Nulla facilisis eu enim nec sollicitudin. Vestibulum tincidunt lorem accumsan, hendrerit lectus vel, luctus felis. Etiam a massa odio. Etiam enim purus, maximus ut ipsum nec, pellentesque imperdiet elit. Cras nec aliquam magna, ut viverra orci. Aliquam eget mi vel sem lobortis efficitur. Nullam a tempor felis. Phasellus vestibulum a lacus et congue. Cras tincidunt eleifend dolor sit amet volutpat. Nullam arcu ex, fringilla eget elit eget, tempus scelerisque massa.

Quisque porttitor diam ipsum, eu gravida elit sodales sit amet. Quisque eget ullamcorper leo, at auctor velit. Sed vel turpis id arcu condimentum interdum. Praesent sit amet gravida erat. Cras libero neque, pulvinar non facilisis eu, convallis et libero. Vestibulum risus urna, eleifend sed convallis sit amet, rhoncus sit amet felis. Curabitur id ipsum orci. Cras ornare non odio et feugiat.`

export const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Real Estate: Trends to Watch in 2024',
    slug: 'future-of-real-estate-2024',
    imageSrc: '/images/future-real-estate.webp',
    publishedAt: '2024-06-08',
    summary:
      'Explore the emerging trends in the real estate market for 2024, including technological advancements, sustainable practices, and shifts in buyer preferences.',
    body: lorem,
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
    imageSrc: '/images/competitive-market.webp',
    publishedAt: '2024-05-20',
    summary:
      'Learn effective strategies to sell your home fast, from staging tips to pricing strategies, ensuring you get the best value in a competitive real estate market.',
    body: lorem,
    author: {
      name: 'Andres',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    id: '3',
    title: 'Renting vs. Buying: Which is the Better Option in 2024?',
    slug: 'renting-vs-buying-2024',
    imageSrc: '/images/renting-vs-buying.webp',
    publishedAt: '2024-04-15',
    summary:
      'A comprehensive guide to help you decide whether renting or buying is the better option for you in 2024, considering market conditions, personal circumstances, and financial implications.',
    body: lorem,
    author: {
      name: 'Maria',
      avatar: 'https://via.placeholder.com/50',
    },
  },
  {
    id: '4',
    title: 'How to Invest in Real Estate: A Beginner’s Guide',
    slug: 'investing-in-real-estate',
    imageSrc: '/images/invest-in-real-estate.webp',
    publishedAt: '2024-03-10',
    summary:
      'This guide covers the basics of real estate investment, including types of properties, financing options, and tips for maximizing your return on investment.',
    body: lorem,
    author: {
      name: 'Andres',
      avatar: 'https://via.placeholder.com/50',
    },
  },
] as const
