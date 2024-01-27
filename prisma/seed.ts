import { PrismaClient } from "@prisma/client";

// seed.js
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Andres Arias",
      email: "andresrarias@gmail.com",
      properties: {
        create: {
          name: "Casa Linda",
          address: "Santiago del estero 975",
          type: "HOUSE",
          areaCovered: 43,
          areaTotal: 43,
          bathrooms: 1,
          carport: 0,
          currency: "USD",
          description: `Introducing a charming and inviting house available for rent, nestled in a quiet suburban neighborhood that exudes warmth and comfort. This medium-sized, three-bedroom, two-bathroom home is the perfect blend of modern convenience and timeless appeal.
          As you approach the property, you'll be greeted by a well-manicured front lawn and a picturesque façade with a classic brick exterior. The covered porch is an ideal spot for sipping your morning coffee or enjoying a peaceful evening.
          Upon entering, you'll find a spacious and open living room bathed in natural light, thanks to large windows that provide beautiful views of the surrounding greenery. The living room seamlessly flows into a well-appointed kitchen, featuring granite countertops, stainless steel appliances, and ample cabinet space, making it a haven for both aspiring and seasoned chefs.
          Adjacent to the kitchen is a cozy dining area, perfect for family gatherings and intimate meals. Sliding glass doors lead to a private backyard, complete with a patio for outdoor entertaining, a lush lawn for gardening or play, and a fenced-in space for your furry friends to roam safely.
          The three bedrooms are generously sized and boast ample closet space, providing comfort and functionality for everyone in the household. The master bedroom includes an en-suite bathroom for added privacy and convenience.
          Additional highlights of this home include a separate laundry room, a two-car garage with extra storage space, and a central heating and cooling system to keep you comfortable year-round.
          Located in a family-friendly neigborhood with excellent schools, parks, and amenities nearby, this house for rent offers the perfect balance of suburban tranquility and modern living. Whether you're a young family, a couple looking to settle down, or anyone in between, this property offers a welcoming and comfortable place to call home. Don't miss the opportunity to make this lovely house yours and create lasting memories within its walls. Contact us today to schedule a viewing and experience the charm of this wonderful home firsthand.`,
          location: "Salta",
          operationType: "RENT",
          price: 200,
          propertyFacing: "NORTH",
          rooms: 3,
          roomsTotal: 65,
          slug: "casa-linda",
          yearsBuilt: 34,
          city: "Salta",
        }
      }
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
