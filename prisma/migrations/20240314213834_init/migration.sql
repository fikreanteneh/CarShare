/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `events` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `meetup_api_services` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `organizers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `organizers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "events_id_key" ON "events"("id");

-- CreateIndex
CREATE UNIQUE INDEX "meetup_api_services_id_key" ON "meetup_api_services"("id");

-- CreateIndex
CREATE UNIQUE INDEX "organizers_id_key" ON "organizers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "organizers_email_key" ON "organizers"("email");
