export const arrayMax = (values: number[]) => {
  if (values.length === 0) return 0;
  return Math.max(...values);
};
