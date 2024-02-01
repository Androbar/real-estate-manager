import PropertiesPage from "@/components/client/Properties.client"
import prisma from "@/lib/prismaClient";


export const PropertiesServer = async () => {
  const maxValues = await prisma.property.aggregate({
    _max: {
      price: true,
      areaTotal: true,
    },
  });
  const maxPrice = maxValues._max.price !== null ? maxValues._max.price : undefined;
  const maxSize = maxValues._max.areaTotal !== null ? maxValues._max.areaTotal : undefined;

  return (
    <PropertiesPage maxPrice={maxPrice} maxSize={maxSize} />
  )
}