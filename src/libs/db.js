import { PrismaClient } from '@/generated/prisma';
import { Prisma } from '@/generated/prisma';


let db;

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient();
} else {
  if (!global.db) {
    global.db = new PrismaClient();
  }
  db = global.db;
}

export default db;