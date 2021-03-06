export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const StringEnumObjects = (enumme: any): Array<{ label: string; value: string }> => {
  return Object.keys(enumme).map((key) => ({ label: key, value: enumme[key] }));
};

export const IntEnumObjects = (enumme: any): Array<{ label: string; value: number }> => {
  return Object.keys(enumme)
    .filter((value) => !Number.isNaN(Number(value)))
    .map((key) => ({ label: enumme[key], value: parseInt(key, 10) }));
};

export const IntEnumValues = (enumme: any): Array<string> => {
  return Object.keys(enumme).filter((value) => !Number.isNaN(Number(value)));
};
