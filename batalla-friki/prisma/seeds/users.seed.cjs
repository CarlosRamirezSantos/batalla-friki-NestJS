const bcrypt = require('bcrypt');

async function seedUsers(prisma) {
const plainPassword = '123456'; 
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const users = [
    { 
      email: 'admin@batallafriki.com', 
      name: 'Fernando', 
      role: 'ADMIN', 
      level: 99 
    },
    { 
      email: 'goku@batallafriki.com', 
      name: 'Goku Player', 
      role: 'USER', 
      level: 1 
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        password: hashedPassword,
        level: user.level,
        roles: {
          set: [],
          connect: { name: user.role }
        }
      },
      create: {
        email: user.email,
        password: hashedPassword,
        name: user.name,
        level: user.level,
        roles: {
          connect: { name: user.role }
        }
      },
    });
  }
}

module.exports = { seedUsers };
