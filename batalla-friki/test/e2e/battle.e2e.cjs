const request = require('supertest');
const { prisma } = require('./helpers/prisma-test-client.cjs');
const { describe, it } = require('./helpers/test-runner.cjs');
const kleur = require('kleur');

async function runBattleTests(BASE_URL) {
  await describe(kleur.blue('---- Tests: Battle API (E2E) ----'), async () => {
    
    let jwtToken;
    let characterId;
    let battleId;
    const testUser = { email: 'battle_tester@test.com', password: '123', name: 'Goku' };

    await describe(kleur.magenta('Preparación'), async () => {

      const testUser = { email: 'battle_tester@test.com', password: 'Password123!', name: 'Goku' };
      
      await prisma.user.deleteMany({ where: { email: testUser.email } });
      

      const regRes = await request(BASE_URL).post('/auth/register').send(testUser);
      if (regRes.status !== 201) throw new Error(kleur.red(`Fallo al registrar usuario de prueba: ${JSON.stringify(regRes.body)}`));


      const loginRes = await request(BASE_URL).post('/auth/login').send({ email: testUser.email, password: testUser.password });
      jwtToken = loginRes.body.accessToken || (loginRes.body.data && loginRes.body.data.accessToken);
      
      if (!jwtToken) throw new Error(kleur.red('El login no ha devuelto un Token válido'));

      const charRes = await request(BASE_URL).get('/characters').set('Authorization', `Bearer ${jwtToken}`);
      const chars = charRes.body.data || charRes.body;
      if (!chars || chars.length === 0) throw new Error(kleur.red('No hay personajes creados en la BBDD para testear batallas'));
      characterId = chars[0].id; 
});

    await describe(kleur.magenta('Mecánicas PVE'), async () => {
      
      await it('POST /battles/create-pve - Debería crear sala contra el bot', async () => {
        const res = await request(BASE_URL)
          .post('/battles/create-pve')
          .set('Authorization', `Bearer ${jwtToken}`)
          .send({ characterId: characterId })
          .expect(201); 

        const payload = res.body.data || res.body;
        battleId = payload.battleId;
        if (!battleId) throw new Error(kleur.red('El servidor no devolvía el battleId'));
});

      await it('POST /battles/attack - Debería procesar un ataque', async () => {
        await request(BASE_URL)
          .post('/battles/attack')
          .set('Authorization', `Bearer ${jwtToken}`)
          .send({ battleId: battleId })
          .expect(201); 
});

    });

  });
}

module.exports = { runBattleTests };