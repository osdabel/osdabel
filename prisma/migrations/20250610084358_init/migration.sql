/*
  Warnings:

  - A unique constraint covering the columns `[idTim]` on the table `Peserta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idInvoice" INTEGER NOT NULL,
    "Payed" TEXT,
    "idTim" INTEGER NOT NULL,
    "namaKetua" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "PayStatus" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_idInvoice_key" ON "Invoice"("idInvoice");

-- CreateIndex
CREATE UNIQUE INDEX "Peserta_idTim_key" ON "Peserta"("idTim");
