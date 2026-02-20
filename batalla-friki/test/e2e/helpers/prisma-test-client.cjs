const { join } = require('node:path');
require('dotenv').config(); 
const { PrismaPg } = require('@prisma/adapter-pg');

const { PrismaClient } = require(join(process.cwd(), 'generated/prisma2'));

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

module.exports = { prisma };