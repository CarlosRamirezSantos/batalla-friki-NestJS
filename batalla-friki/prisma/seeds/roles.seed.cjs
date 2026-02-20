async function seedRoles(prisma) {
const roles = ['USER', 'ADMIN'];

  for (const roleName of roles) {
    await prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: { name: roleName },
    });
  }
}

module.exports = { seedRoles };
