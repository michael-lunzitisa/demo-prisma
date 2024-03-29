/*
  Warnings:

  - You are about to drop the column `sessionId` on the `Cohorte` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cohorte" DROP CONSTRAINT "Cohorte_sessionId_fkey";

-- AlterTable
ALTER TABLE "Cohorte" DROP COLUMN "sessionId";
