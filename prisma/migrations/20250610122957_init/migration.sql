-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "nama" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);
