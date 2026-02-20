const { runAuthTests } = require('../auth.e2e.cjs');
const { runBattleTests } = require('../battle.e2e.cjs');
const { runCharactersTests } = require('../characters.e2e.cjs');

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

async function main() {
  console.log('Iniciando tests E2E...');
  console.log(`API_URL: ${BASE_URL}`);

  try {
    await runAuthTests(BASE_URL);
    await runCharactersTests(BASE_URL);
    await runBattleTests(BASE_URL);

    console.log('\nResultado: todos los tests pasaron.');
    process.exit(0);
  } catch (error) {
    console.error('\nResultado: error en los tests.');
    console.error(error);
    process.exit(1);
  }
}

main();
