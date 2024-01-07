/*
  Warnings:

  - You are about to drop the column `address` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `barbers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "barbers" DROP COLUMN "address",
DROP COLUMN "cep",
DROP COLUMN "city",
DROP COLUMN "district",
DROP COLUMN "number",
DROP COLUMN "state";

-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "barbers" ADD CONSTRAINT "barbers_id_fkey" FOREIGN KEY ("id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;
