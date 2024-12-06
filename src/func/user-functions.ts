import { User } from "./types";

export const averageAge = (allUsers: User[]) => {
  let allAges: number = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User[]) => {
  let AllHobbies: number = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return AllHobbies / allUsers.length;
};

export const mostHobbies = (allUsers: User[]): number => {
  let maxHobbies: number = 0;

  allUsers.forEach((user) => {
    if (user.hobby.length > maxHobbies) {
      maxHobbies = user.hobby.length;
    }
  });

  return maxHobbies;
};

export const oldestUser = (allUsers: User[]) => {
  let oldestAge: number = 0;
  let oldestName: string = "";

  allUsers.forEach((user) => {
    if (user.age > oldestAge) {
      oldestAge = user.age;
      oldestName = user.name;
    }
  });
  return oldestName;
};

export const youngestUser = (allUsers: User[]) => {
  let youngestName: string = "";
  let youngestAge: number = Infinity;

  allUsers.forEach((user) => {
    if (user.age < youngestAge) {
      youngestName = user.name;
    }
  });
  return youngestName;
};
