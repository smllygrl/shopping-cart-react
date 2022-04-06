export const cleanString = (stringifiedJSON) => {
  const cleanedString = stringifiedJSON.slice(0, -1);
  return cleanedString;
};
