import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

let prisma: PrismaClient;

export const db = () => {
  if (prisma) return prisma;
  const pool = new Pool({ connectionString: `${process.env.DATABASE_URL}` });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
  return prisma;
};
