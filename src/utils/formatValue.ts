const formatValue = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  // return Number(value).toLocaleString('pt-BR', {
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });
};

export default formatValue;
