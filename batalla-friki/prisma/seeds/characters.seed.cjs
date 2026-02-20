async function seedCharacters(prisma) {
const characters = [
    { name: 'Gandalf', hp: 100, attack: 20, level: 1 },
    { name: 'Sauron', hp: 120, attack: 25, level: 1 },
    { name: 'Gollum', hp: 50, attack: 10, level: 1 },
    { name: 'Frodo', hp: 80, attack: 15, level: 1 },
    { name: 'Harry Potter', hp: 90, attack: 22, level: 1 },
    { name: 'Jon Snow', hp: 110, attack: 18, level: 1 },
    { name: 'Aragorn', hp: 150, attack: 30, level: 2 },
    { name: 'Geralt de Rivia', hp: 160, attack: 35, level: 3 },
    { name: 'Legolas', hp: 130, attack: 45, level: 3 },
    { name: 'Gimli', hp: 180, attack: 35, level: 4 },
    { name: 'Luke Skywalker', hp: 140, attack: 50, level: 5 },
    { name: 'Galadriel', hp: 200, attack: 55, level: 6 },
    { name: 'Iron Man', hp: 190, attack: 52, level: 6 },
    { name: 'Darth Vader', hp: 230, attack: 58, level: 8 },
    { name: 'Voldemort', hp: 180, attack: 70, level: 9 },
    { name: 'Rey Brujo', hp: 250, attack: 65, level: 10 },
    { name: 'Thanos', hp: 350, attack: 75, level: 12 },
    { name: 'Goku (SSJ)', hp: 300, attack: 85, level: 15 },
    { name: 'Saitama', hp: 999, attack: 999, level: 50 },
  ];

  for (const char of characters) {
    await prisma.character.upsert({
      where: { name: char.name },
      update: {
        hp: char.hp,
        attack: char.attack,
        level: char.level
      }, 
      create: char,
    });
  }
}

module.exports = { seedCharacters };
