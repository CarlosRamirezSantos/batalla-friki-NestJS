const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');

async function runCharactersTests(BASE_URL) {
  await describe(kleur.blue('---- Tests: Characters API (E2E) ----'), async () => {
    
    let jwtToken;
    const testUser = { email: 'char_tester@test.com', password: '123', name: 'Tester' };

    await describe(kleur.magenta('Preparación'), async () => {

      await prisma.user.deleteMany({ where: { email: testUser.email } });
      await request(BASE_URL).post('/auth/register').send(testUser);
      
      const loginRes = await request(BASE_URL).post('/auth/login').send({ email: testUser.email, password: testUser.password });
      jwtToken = loginRes.body.accessToken || (loginRes.body.data && loginRes.body.data.accessToken);
});

    await describe(kleur.magenta('Lecturas'), async () => {
      await it('GET /characters - Debería devolver un array de personajes', async () => {
        const res = await request(BASE_URL)
          .get('/characters')
          .set('Authorization', `Bearer ${jwtToken}`) 
          .expect(200);

        const payload = res.body.data || res.body;
        if (!Array.isArray(payload)) throw new Error(kleur.red('El endpoint no devolvía un array'));
});
    });

  });
}

module.exports = { runCharactersTests };
