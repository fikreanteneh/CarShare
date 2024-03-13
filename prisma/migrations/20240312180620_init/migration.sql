-- CreateTable
CREATE TABLE "organizer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "client_id" TEXT NOT NULL,
    "client_secret" TEXT NOT NULL,
    "meetup_api" BOOLEAN NOT NULL,

    CONSTRAINT "organizer_pkey" PRIMARY KEY ("id")
);
