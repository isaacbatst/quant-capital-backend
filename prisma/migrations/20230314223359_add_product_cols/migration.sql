/*
  Warnings:

  - Added the required column `order` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `show` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `order` INTEGER NOT NULL,
    ADD COLUMN `show` BOOLEAN NOT NULL;
