// Cody remember that this repo is using Chakra ui

import { PrismaClient } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import PropertyServerComponent from "./Property.server";


export default function Property({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <PropertyServerComponent slug={slug} />
    </>
  )
}
