export abstract class Utils {
  private static readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  public static numberToEncodedLetter(number: number): string | undefined {
    if (isNaN(number)) {
      return undefined;
    }

    number = Math.abs(Math.floor(number));

    let index = number % 26;
    let quotient = number / 26;
    let result: string;

    if (number <= 26) {
      return this.numToLetter(number);
    }

    if (quotient >= 1) {
      if (index === 0) {
        quotient--;
      }
      result = this.numberToEncodedLetter(quotient);
    }

    if (index === 0) {
      index = 26;
    }

    return result + this.numToLetter(index);
  }

  private static numToLetter(number: number): string | undefined {
    if (number > 26 || number < 0) {
      return undefined;
    }

    if (number === 0) {
      return '';
    } else {
      return this.alphabet.slice(number - 1, number);
    }
  }

  public static containsRuPath(path: string): boolean {
    return path.split(/\/(?=.)/).includes('ru');
  }
}
