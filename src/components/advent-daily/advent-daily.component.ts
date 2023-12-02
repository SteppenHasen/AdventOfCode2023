import { Component, Input } from '@angular/core';
import { PUZZLE_INPUT, PUZZLE_INPUT_TWO } from './advent-dailly.const';

@Component({
  selector: 'app-advent-daily',
  templateUrl: './advent-daily.component.html',
  styleUrl: './advent-daily.component.scss',
})
export class AdventDailyComponent {
  //TODO make setter service later for each day entity
  @Input() public day: number = 1;
  @Input() public taskName: string = 'Not Quite Lisp';

  private readonly encriptor: { [key: string]: string } = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  public result(): number {
    const numReg = new RegExp(/^[0-9]/);
    return PUZZLE_INPUT.split('\n').reduce((result, line) => {
      const numbers = Array.from(line).filter(it => numReg.test(it));

      return numbers.length === 1
        ? result + Number(numbers[0].concat(numbers[0]))
        : result + Number(numbers[0].concat(numbers.pop()!));
    }, 0);
  }

  public partTwo(): number {
    return PUZZLE_INPUT_TWO.split('\n').reduce((result, line) => {
      const numbers = this.getFirstLastNumber(line);
      return (result += Number(numbers.first.concat(numbers.last)));
    }, 0);
  }

  private getFirstLastNumber(line: string): { first: string; last: string } {
    const numReg = new RegExp(/^[0-9]/);
    let last: string = '';
    let first: string = '';
    const reverseLineChars = line
      .split('')
      .reverse()
      .reduce((digit, char, i, arr) => {
        if (numReg.test(char)) {
          last = char;
          arr.splice(1);
        }

        digit += char;

        const match = Object.keys(this.encriptor).find(
          key =>
            digit.includes(key) ||
            digit.includes(key.split('').reverse().join(''))
        );

        if (match) {
          last = this.encriptor[match];
          arr.splice(1);
        }

        return digit;
      }, '');

    const lineChars = line.split('').reduce((digit, char, i, arr) => {
      if (numReg.test(char)) {
        first = char;
        arr.splice(1);
      }

      digit += char;

      const match = Object.keys(this.encriptor).find(key =>
        digit.includes(key)
      );

      if (match) {
        first = this.encriptor[match];
        arr.splice(1);
      }

      return digit;
    }, '');

    return { first: first, last: last };
  }
}
