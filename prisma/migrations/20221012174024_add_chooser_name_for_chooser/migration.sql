/*
  Warnings:

  - Added the required column `chooser_name` to the `choosers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "choosers" ADD COLUMN     "chooser_name" VARCHAR NOT NULL;
