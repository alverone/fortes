abstract class Formatter {
  public static formatCurrency(num: number) {
    return Intl.NumberFormat("uk-UA", {
      maximumFractionDigits: 2,
    }).format(num);
  }
}

export { Formatter };
