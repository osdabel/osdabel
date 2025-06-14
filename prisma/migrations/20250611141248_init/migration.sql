-- CreateTable
CREATE TABLE "PayedTim" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idTim" INTEGER NOT NULL,
    "idInvoice" INTEGER NOT NULL,
    "namaTim" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "namaKetua" TEXT NOT NULL,
    "lomba" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "payedTo" TEXT NOT NULL,

    CONSTRAINT "PayedTim_pkey" PRIMARY KEY ("id")
);
