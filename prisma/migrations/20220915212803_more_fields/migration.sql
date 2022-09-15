/*
  Warnings:

  - Added the required column `bidding` to the `contracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `contracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `contracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `object` to the `contracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `contracts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contracts" ADD COLUMN     "bidding" TEXT NOT NULL,
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isExpired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "object" TEXT NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "year" SET DEFAULT date_part('year', now());
