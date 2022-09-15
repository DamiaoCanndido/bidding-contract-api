-- CreateTable
CREATE TABLE "contracts" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "year" INTEGER NOT NULL DEFAULT date_part('year', now()),

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);
