export const dateToString = (date: Date) => {
  return date.toLocaleDateString('pt-BR', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
