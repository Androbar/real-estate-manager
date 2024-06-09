-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('RENT', 'SALE');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('APARTMENT', 'HOUSE', 'OFFICE', 'WAREHOUSE', 'LAND');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "location" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "city" TEXT NOT NULL,
    "operationType" "OperationType" NOT NULL,
    "price" DOUBLE PRECISION,
    "expenses" DOUBLE PRECISION,
    "currency" TEXT,
    "type" "PropertyType" NOT NULL,
    "areaTotal" DOUBLE PRECISION,
    "areaCovered" DOUBLE PRECISION,
    "roomsTotal" INTEGER,
    "bathrooms" INTEGER,
    "rooms" INTEGER,
    "yearsBuilt" INTEGER,
    "propertyFacing" TEXT,
    "orientation" TEXT,
    "carport" INTEGER,
    "ownerId" INTEGER NOT NULL,
    "availableAsOf" TEXT,
    "constructionYear" INTEGER,
    "buildingCondition" TEXT,
    "streetFrontageWidth" INTEGER,
    "numberOfFrontages" INTEGER,
    "coveredParkingSpaces" INTEGER,
    "outdoorParkingSpaces" INTEGER,
    "surroundingsType" TEXT,
    "livingArea" INTEGER,
    "livingRoomSurface" INTEGER,
    "kitchenType" TEXT,
    "kitchenSurface" INTEGER,
    "bedrooms" INTEGER,
    "bedroom1Surface" INTEGER,
    "bedroom2Surface" INTEGER,
    "bedroom3Surface" INTEGER,
    "bedroom4Surface" INTEGER,
    "bedroom5Surface" INTEGER,
    "showerRooms" INTEGER,
    "toilets" INTEGER,
    "officeSurface" INTEGER,
    "office" BOOLEAN,
    "professionalSpaceSurface" INTEGER,
    "attic" BOOLEAN,
    "furnished" BOOLEAN,
    "heatingType" TEXT,
    "surfaceOfThePlot" INTEGER,
    "connectionToSewerNetwork" TEXT,
    "gasWaterElectricity" BOOLEAN,
    "gardenSurface" INTEGER,
    "terraceSurface" INTEGER,
    "elevator" BOOLEAN,
    "accessibleForDisabled" BOOLEAN,
    "tvCable" BOOLEAN,
    "visioPhone" BOOLEAN,
    "swimmingPool" BOOLEAN,
    "totalGroundFloorBuildable" INTEGER,
    "floodZoneType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "caption" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyImages" (
    "propertyId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PropertyImages_pkey" PRIMARY KEY ("propertyId","imageId")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Property_slug_key" ON "Property"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Image_url_key" ON "Image"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyImages" ADD CONSTRAINT "PropertyImages_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyImages" ADD CONSTRAINT "PropertyImages_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
