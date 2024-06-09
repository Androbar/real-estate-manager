## Real estate website
Showcase of a Nextjs page to show a list of properties
Technologies used
Nextjs
Prisma
Postgres
Chakra UI
React hook forms
Zod validation
TRPC?

### TODO:
- [ x ] Define property prisma model
- [ x ] Add property detail page
- [ x ] Add properties seed to prisma - add 10 - ask chat gpt
- [ x ] Add property list page with filters, sort by and map - https://housinganywhere.com/s/Brussels--Belgium

- [ x ] Add property map with open street maps and marker, do cool markers
- [ ] Add upload/edit/delete(soft) property page
      upload                                    - 
      edit                                      - done
      delete                                    - 
      change location to long lat in db         - 
      Then adapt all images and set them for each property and in the code
- [ x ] Build home page
      big hero                                  - done
      fast search properties bar                - done
      featured properties                       - done
      ** see https://domusbienesraices.com.ar/ for cards design
      About us section                          - done
      contact us check reynoso bienes raices    - done
      blog entries                              - done
      footer w/newsletter                       - done
      copyright                                 - done
- [ x ] Pages:
      Buy         - just pass a querystring with sell
      Rent        - pass a querystring with rent
      Sell        - new page
      Blog        - some entry posts
      About us    - aboot us
      Contact     - form to contact
- [ x ] Add menu on layout
- [ x ] Add footer on layout
- [ x ] Remove global container and add localized container by sections
      header, footer
- [ x ] Add blog post pages, and featured images
- [ ] Refactor to get queryParams in /properties
- [ ] Add whatsapp icon on layout with chat to send
- [ ] Define User prisma model
- [ ] Add users login (with third party) - store in context
- [ ] Add user dashboard for user properties management
- [ ] Add login for clients
- [ ] Save contact form in pgadmin, add google check, add contact list in backend for client
- [ ] Save search, bookmark properties, on local storage
- [ ] Email notifications (only hook to send at midnight)


