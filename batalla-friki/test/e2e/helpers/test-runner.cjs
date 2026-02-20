async function describe(name, fn) {
  console.log(`\n${name}`);
  await fn();
}

async function it(name, fn) {
  try {
    await fn();
    console.log(`  OK: ${name}`);
  } catch (err) {
    console.error(`  FAIL: ${name}`);
    throw err;
  }
}

module.exports = { describe, it };
