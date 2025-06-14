-- CreateTable
CREATE TABLE "Peserta" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idTim" INTEGER NOT NULL,
    "lomba" TEXT NOT NULL,
    "namaPeserta" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "username" TEXT,
    "idML" TEXT,

    CONSTRAINT "Peserta_pkey" PRIMARY KEY ("id")
);
