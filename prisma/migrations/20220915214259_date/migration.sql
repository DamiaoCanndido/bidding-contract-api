-- AlterTable
ALTER TABLE "contracts" ALTER COLUMN "year" SET DEFAULT date_part('year', now()),
ALTER COLUMN "deadline" SET DATA TYPE TEXT;
