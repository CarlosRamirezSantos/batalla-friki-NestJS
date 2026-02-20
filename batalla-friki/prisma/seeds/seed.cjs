require('dotenv/config');

const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('../../generated/prisma2');

const { seedRoles } = require('./roles.seed.cjs');
const { seedUsers } = require('./users.seed.cjs');
const { seedCharacters } = require('./characters.seed.cjs');

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL
  }),
});

async function main() {
await prisma.battle.deleteMany({});
  await prisma.character.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.role.deleteMany({});

  await seedRoles(prisma);
  await seedUsers(prisma);
  await seedCharacters(prisma);
}

main()
  .catch((e) => {
    console.error('Seed failed', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
