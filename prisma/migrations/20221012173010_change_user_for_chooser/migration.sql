/*
  Warnings:

  - You are about to drop the column `user_id` on the `lists` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chooser_id` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lists" DROP CONSTRAINT "lists_user_id_fkey";

-- AlterTable
ALTER TABLE "lists" DROP COLUMN "user_id",
ADD COLUMN     "chooser_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "chooser" (
    "id" TEXT NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chooser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_choosers_id" ON "chooser"("id");

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_chooser_id_fkey" FOREIGN KEY ("chooser_id") REFERENCES "chooser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
