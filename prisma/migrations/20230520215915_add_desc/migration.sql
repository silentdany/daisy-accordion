/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_userId_fkey";

-- DropTable
DROP TABLE "Room";

-- CreateTable
CREATE TABLE "Description" (
    "id" TEXT NOT NULL,
    "replicateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "inputImage" TEXT NOT NULL,
    "inputFeatures" TEXT NOT NULL,
    "outputTitle" TEXT NOT NULL,
    "outputShortDesc" TEXT NOT NULL,
    "outputFullDesc" TEXT NOT NULL,
    "outputAdvice" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Description_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Description_replicateId_userId_key" ON "Description"("replicateId", "userId");

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
