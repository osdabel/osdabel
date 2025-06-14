-- CreateTable
CREATE TABLE "Tim" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "namaTim" TEXT NOT NULL,
    "namaKetua" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "idTim" TEXT NOT NULL,

    CONSTRAINT "Tim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tim_idTim_key" ON "Tim"("idTim");
