/*
  Warnings:

  - Changed the type of `idTim` on the `Tim` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tim" DROP COLUMN "idTim",
ADD COLUMN     "idTim" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tim_idTim_key" ON "Tim"("idTim");
