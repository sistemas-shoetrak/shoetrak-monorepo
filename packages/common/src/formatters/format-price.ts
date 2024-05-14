export function formatPrice(
  price: number = 0,
  locale: Intl.LocalesArgument = "pt-BR",
  options: Intl.NumberFormatOptions = {},
): string {
  return new Intl.NumberFormat(locale, options).format(price);
}
