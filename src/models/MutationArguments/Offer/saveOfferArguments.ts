export const saveOfferArguments = <Values extends { isInternship: boolean; maximumSalary: number }>(
  values: Values
) => ({
  ...values,
  maximumSalary: values.isInternship ? NaN : values.maximumSalary
});
