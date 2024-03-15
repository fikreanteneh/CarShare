/*
  Warnings:

  - Added the required column `name` to the `meetup_api_services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meetup_api_services" ADD COLUMN     "name" TEXT NOT NULL;
