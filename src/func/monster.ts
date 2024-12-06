import { Monster } from "./types";

//utöka så alla egenskaper för monstret skrivs ut

export const prettyPrintMonster = (m: Monster[]) => {
  m.forEach((monster) => {
    console.log(
      `Name: ${monster.name}, Age: ${monster.age}, No. of tentacles: ${monster.tentacles}, No. of eyes: ${monster.eyes}, Has wings: ${monster.hasWings}`
    );
  });
};

export const averageMonsterAge = (m: Monster[]) => {
  let totalYears: number = 0;
  m.forEach((monster) => {
    totalYears += monster.age;
  });

  let averageAge: number = totalYears / m.length;
  let roundedAverageAge: number = Math.floor(averageAge);
  return roundedAverageAge;
};

export const averageNumberOfTentacles = (m: Monster[]) => {
  let totalNumberOfTentacles: number = 0;
  m.forEach((monster) => {
    totalNumberOfTentacles += monster.tentacles;
  });

  let averageTentacles: number = totalNumberOfTentacles / m.length;
  let roundedAverageTentacles: number = Math.floor(averageTentacles);

  return roundedAverageTentacles;
};

export const numberOfMonstersWithWings = (m: Monster[]) => {
  let monstersWithWings: number = 0;
  m.forEach((monster) => {
    if (monster.hasWings === true) {
      monstersWithWings += 1;
    }
  });
  return monstersWithWings;
};

export const getAllNoWingedMonster = (m: Monster[]) => {
  let noWingedMonsters: string[] = [];
  m.forEach((monster) => {
    if (monster.hasWings === false) {
      noWingedMonsters.push(monster.name);
    }
  });
  return `Följande monster har inte vingar: ${noWingedMonsters}`;
};
