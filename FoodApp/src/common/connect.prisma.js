import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../common/prisma/generated/prisma/client.js";
import { DATABASE_URL } from "../common/constants/app.constant.js";

const url = new URL(DATABASE_URL);
console.log({ url, databaseName: url.pathname.substring(1) });

const adapter = new PrismaMariaDb({
   host: url.hostname,
   user: url.username,
   password: url.password,
   database: url.pathname.substring(1),
   port: url.port,
   connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };