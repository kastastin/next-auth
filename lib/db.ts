import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// Hot-reloading will cause the global prisma object to be reset!
// globalThis is not affected by hot-reloading, so...
// If NOT development - set the global prisma object
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
