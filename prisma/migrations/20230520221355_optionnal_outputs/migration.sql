-- AlterTable
ALTER TABLE "Description" ALTER COLUMN "outputTitle" DROP NOT NULL,
ALTER COLUMN "outputShortDesc" DROP NOT NULL,
ALTER COLUMN "outputFullDesc" DROP NOT NULL,
ALTER COLUMN "outputAdvice" DROP NOT NULL;
