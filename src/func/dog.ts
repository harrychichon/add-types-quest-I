import { Dog } from "./types";

export let numberOfColors = (x: Dog[]) => {
  let allColors: string[] = [];
  let uniqueColors: string[] = [];

  x.forEach((dog) => {
    allColors.push(dog.color);
  });

  uniqueColors = Array.from(new Set(allColors));

  return uniqueColors.length;
};

export const commonColor = (x: Dog[] ) => {
  if (x.length === 0) return null;
  const frequencyMap = new Map<string, number>();

  x.forEach((dog) => {
    const color = dog.color;
    frequencyMap.set(color, (frequencyMap.get(color) || 0) + 1);
  });

  let mostCommonColor: string | null = null;
  let maxCount = 0;

  for (const [color, count] of frequencyMap.entries()) {
    if (count > maxCount) {
      mostCommonColor = color;
      maxCount = count;
    }
  }

  return mostCommonColor;
};
