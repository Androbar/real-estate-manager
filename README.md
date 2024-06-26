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
      delete                                    - done
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
- [ x ] Refactor to get queryParams in /properties
- [ x ] Change price range to two inputs instead of a bar

- [ x ] Define User prisma model
- [ x ] Add users login (with third party)
      * add an env variable to allow signup and login with 3rd party    - done
      * make login and sign in pretty, add links to each other          - done
- [ x ] add logout
- [ x ] Add user dashboard for user properties management / add dashboard button
      * view comments
- [ x ] Add login for clients
- [ x ] Save contact form in pgadmin, add google check, add contact list in backend for client
- [ x ] Bookmark properties, on local storage, available to anyone
- [ x ] Change name, add favicon

- [ x ] Add upload property
- [ x ] Fix thumbnail
- [ x ] Fix path save for image (use /uploads/etc, not full pc path)
- [ x ] When uploading image with same name, try to write -1,-2,etc
- [ x ] Fix form longitude and latitude save and load
- [ x ] Editable Form, switch operation type and property type to selects
- [ x ] On edit or create, disable submission add success popup
- [ x ] Add lorem ipsum contact page
- [ x ] Add lorem ipsum about use page
- [ x ] Add blog list page
- [ x ] Fix rent and buy links on main menu
- [ x ] Remove newsletter footer on admin pages
- [ x ] Fix featured properties big card
- [ x ] Fix open street map in property
- [ x ] Enable jsx - chakra ui assigns class differently so it doesn't work
- [ x ] Responsiveness
      https://v2.chakra-ui.com/docs/styled-system/responsive-styles
- [ x ] Fix errors uploading multiple images
- [ x ] Fix delete property
- [ ] Add 20 properties 5 images per property 5*20 100images
      donwload 100 images                 - done
      ask chatgpt to create the data      - done
      load it                             - (5)
      all in salta, 10 7 3 per user       - 
- [ x ] Add session route protection on backend
- [ x ] Use actual uploaded images for properties (if no images, load default)
- [ x ] Use long and lat instead of location for map
- [ x ] Fix js console errors
- [ x ] Fix image order generation
- [ x ] Fix build errors
- [ x ] Disable signup and login with 3rd party with env variable
- [ ] Add metadata
- [ ] On create property show success message and then redirect after 5 seconds

