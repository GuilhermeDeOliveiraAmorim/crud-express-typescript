/*
  Warnings:

  - You are about to drop the `chooser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_chooser_id_fkey";

-- DropTable
DROP TABLE "chooser";

-- CreateTable
CREATE TABLE "choosers" (
    "id" TEXT NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "choosers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_choosers_id" ON "choosers"("id");

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_chooser_id_fkey" FOREIGN KEY ("chooser_id") REFERENCES "choosers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
