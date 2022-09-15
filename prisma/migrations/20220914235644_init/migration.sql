-- CreateTable
CREATE TABLE "contract" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" SERIAL NOT NULL,
    "year" INTEGER NOT NULL DEFAULT date_part('year', now()),

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);
