export const NumberFormatter = {
  formatCuit: (cuit: number) => {
    const cuitString = cuit.toString();
    return [cuitString.slice(0, 2), cuitString.slice(2, 10), cuitString.slice(10, 12)].join("-");
  },
  formatNumber: (value: number) => value.toLocaleString("es-AR")
};
