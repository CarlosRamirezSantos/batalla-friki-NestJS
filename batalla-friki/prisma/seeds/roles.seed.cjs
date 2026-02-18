async function seedRoles(prisma) {
  console.log('🛡️ Creating base roles...');
  
  const roles = ['USER', 'ADMIN'];

  for (const roleName of roles) {
    await prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: { name: roleName },
    });
  }
  
  console.log('✅ Roles created successfully.');
}

module.exports = { seedRoles };
