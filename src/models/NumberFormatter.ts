export const NumberFormatter = {
  formatCuit: (cuit: number | string) => {
    const cuitString = cuit.toString();
    return [cuitString.slice(0, 2), cuitString.slice(2, 10), cuitString.slice(10, 12)].join("-");
  },
  formatNumber: (value: number | string) => Number(value).toLocaleString("es-AR"),
  formatMoney: (value: number | string) => `$${NumberFormatter.formatNumber(value)}`
};
