// import { PrismaClient } from '@prisma/client'

// // seed.js
// const prisma = new PrismaClient()

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: 'Andres Arias',
//       email: 'andresrarias@gmail.com',
//       properties: {
//         create: [
//           {
//             name: 'Casa Linda',
//             address: 'Santiago del estero 975',
//             type: 'HOUSE',
//             areaCovered: 43,
//             areaTotal: 43,
//             bathrooms: 1,
//             carport: 0,
//             currency: 'USD',
//             description: `Introducing a charming and inviting house available for rent, nestled in a quiet suburban neighborhood that exudes warmth and comfort. This medium-sized, three-bedroom, two-bathroom home is the perfect blend of modern convenience and timeless appeal.\n
//           As you approach the property, you'll be greeted by a well-manicured front lawn and a picturesque façade with a classic brick exterior. The covered porch is an ideal spot for sipping your morning coffee or enjoying a peaceful evening.\n
//           Upon entering, you'll find a spacious and open living room bathed in natural light, thanks to large windows that provide beautiful views of the surrounding greenery. The living room seamlessly flows into a well-appointed kitchen, featuring granite countertops, stainless steel appliances, and ample cabinet space, making it a haven for both aspiring and seasoned chefs.\n
//           Adjacent to the kitchen is a cozy dining area, perfect for family gatherings and intimate meals. Sliding glass doors lead to a private backyard, complete with a patio for outdoor entertaining, a lush lawn for gardening or play, and a fenced-in space for your furry friends to roam safely.\n
//           The three bedrooms are generously sized and boast ample closet space, providing comfort and functionality for everyone in the household. The master bedroom includes an en-suite bathroom for added privacy and convenience.
//           Additional highlights of this home include a separate laundry room, a two-car garage with extra storage space, and a central heating and cooling system to keep you comfortable year-round.\n
//           Located in a family-friendly neigborhood with excellent schools, parks, and amenities nearby, this house for rent offers the perfect balance of suburban tranquility and modern living. Whether you're a young family, a couple looking to settle down, or anyone in between, this property offers a welcoming and comfortable place to call home. Don't miss the opportunity to make this lovely house yours and create lasting memories within its walls. Contact us today to schedule a viewing and experience the charm of this wonderful home firsthand.`,
//             location: 'Salta',
//             operationType: 'RENT',
//             price: 200,
//             propertyFacing: 'NORTH',
//             rooms: 3,
//             roomsTotal: 4,
//             slug: 'casa-linda',
//             yearsBuilt: 34,
//             city: 'Salta',
//           },
//           {
//             name: 'Luxury Apartment',
//             slug: 'luxury-apartment',
//             description: 'Spacious luxury apartment in the heart of the city.',
//             address: '123 Main Street',
//             location: '45.6789:-78.9012',
//             city: 'New York',
//             operationType: 'SALE',
//             price: 1000000.0,
//             currency: 'USD',
//             type: 'APARTMENT',
//             areaTotal: 150.0,
//             areaCovered: 120.0,
//             roomsTotal: 4,
//             bathrooms: 2,
//             rooms: 2,
//             yearsBuilt: 5,
//             propertyFacing: 'Front',
//             orientation: 'North',
//             carport: 1,
//           },
//         ],
//       },
//     },
//   })

//   await prisma.user.create({
//     data: {
//       name: 'Roberto Arias',
//       email: 'androbar115@gmail.com',
//       properties: {
//         create: [
//           {
//             name: 'Mountain View House',
//             slug: 'mountain-view-house',
//             description: 'Beautiful house with stunning mountain views.',
//             address: '789 Mountain Road',
//             location: '35.6789:-118.9012',
//             city: 'Denver',
//             operationType: 'SALE',
//             price: 800000.0,
//             currency: 'USD',
//             type: 'HOUSE',
//             areaTotal: 300.0,
//             areaCovered: 250.0,
//             roomsTotal: 6,
//             bathrooms: 4,
//             rooms: 4,
//             yearsBuilt: 7,
//             propertyFacing: 'Front',
//             orientation: 'East',
//             carport: 2,
//           },
//           {
//             name: 'Downtown Office Space',
//             slug: 'downtown-office-space',
//             description: 'Modern office space in the heart of downtown.',
//             address: '456 Main Street',
//             location: '42.1234:-71.5678',
//             city: 'Boston',
//             operationType: 'RENT',
//             price: 4500.0,
//             currency: 'USD',
//             type: 'OFFICE',
//             areaTotal: 350.0,
//             areaCovered: 300.0,
//             roomsTotal: 8,
//             bathrooms: 2,
//             rooms: 5,
//             yearsBuilt: 5,
//             propertyFacing: 'Front',
//             orientation: 'South',
//             carport: 1,
//           },
//           {
//             name: 'Cozy House',
//             slug: 'cozy-house',
//             description: 'Charming cozy house with a garden.',
//             address: '456 Elm Street',
//             location: '40.1234:-74.5678',
//             city: 'Los Angeles',
//             operationType: 'RENT',
//             price: 2500.0,
//             currency: 'USD',
//             type: 'HOUSE',
//             areaTotal: 200.0,
//             areaCovered: 150.0,
//             roomsTotal: 5,
//             bathrooms: 3,
//             rooms: 3,
//             yearsBuilt: 10,
//             propertyFacing: 'Back',
//             orientation: 'South',
//             carport: 2,
//           },
//         ],
//       },
//     },
//   })

//   await prisma.user.create({
//     data: {
//       name: 'John Doe',
//       email: 'somemail@gmail.com',
//       properties: {
//         create: [
//           {
//             name: 'Spacious Office Space',
//             slug: 'office-space',
//             description: 'Large office space available for rent.',
//             address: '789 Oak Avenue',
//             location: '37.4321:-122.9876',
//             city: 'San Francisco',
//             operationType: 'RENT',
//             price: 5000.0,
//             currency: 'USD',
//             type: 'OFFICE',
//             areaTotal: 500.0,
//             areaCovered: 400.0,
//             roomsTotal: 10,
//             bathrooms: 2,
//             rooms: 6,
//             yearsBuilt: 3,
//             propertyFacing: 'Front',
//             orientation: 'West',
//             carport: 0,
//           },
//           {
//             name: 'Warehouse with Loading Dock',
//             slug: 'warehouse-loading-dock',
//             description: 'Industrial warehouse with a loading dock.',
//             address: '101 Factory Road',
//             location: '38.8765:-77.5432',
//             city: 'Chicago',
//             operationType: 'SALE',
//             price: 1200000.0,
//             currency: 'USD',
//             type: 'WAREHOUSE',
//             areaTotal: 1000.0,
//             areaCovered: 800.0,
//             roomsTotal: 0,
//             bathrooms: 0,
//             rooms: 0,
//             yearsBuilt: 15,
//             propertyFacing: 'Front',
//             orientation: 'North',
//             carport: 0,
//           },
//         ],
//       },
//     },
//   })
// }

// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
