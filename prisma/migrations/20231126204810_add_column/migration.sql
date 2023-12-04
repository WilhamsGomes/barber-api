/*
  Warnings:

  - Added the required column `name` to the `barbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barbers" ADD COLUMN     "name" TEXT NOT NULL;
