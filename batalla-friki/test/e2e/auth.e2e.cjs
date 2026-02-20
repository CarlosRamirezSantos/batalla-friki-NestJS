const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');

async function runAuthTests(BASE_URL) {
  await describe(kleur.blue('---- Tests: Auth API (E2E) ----'), async () => {
    
    const testUser = {
      name: 'Guerrero E2E',
      email: 'e2e_warrior@batalla.com',
      password: 'password123'
    };

    await describe(kleur.magenta('Preparación'), async () => {
      await prisma.user.deleteMany({ where: { email: testUser.email } });
});

    await describe(kleur.magenta('Registro y Login'), async () => {
      
      await it('POST /auth/register - Debería crear un nuevo guerrero', async () => {
        const res = await request(BASE_URL)
          .post('/auth/register')
          .send(testUser)
          .expect(201); 

        const dbUser = await prisma.user.findUnique({ where: { email: testUser.email } });
        if (!dbUser) throw new Error(kleur.red('El usuario no se guardó en la base de datos'));
        if (dbUser.name !== testUser.name) throw new Error(kleur.red('El nombre guardado es incorrecto'));
});

      await it('POST /auth/login - Debería devolver un token JWT', async () => {
        const res = await request(BASE_URL)
          .post('/auth/login')
          .send({ email: testUser.email, password: testUser.password })
          .expect(201);

        const token = res.body.accessToken || (res.body.data && res.body.data.accessToken);
        if (!token) throw new Error(kleur.red('El login no devolvió un accessToken'));
});

    });

  });
}

module.exports = { runAuthTests };