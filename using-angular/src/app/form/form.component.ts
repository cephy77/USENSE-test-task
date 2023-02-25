import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  password: string = '';
  inputType: string = 'password';
  visibilityPng: string = '../../assets/show.png';
  indicators = {
    leftBar: '',
    mediumBar: '',
    rightBar: '',
  };

  public toggleVisibility() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.visibilityPng = '../../assets/hide.png';
    } else {
      this.inputType = 'password';
      this.visibilityPng = '../../assets/show.png';
    }
  }
  public passwordHandler() {
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /\W/.test(this.password);
    const hasChars = /[a-zA-Z]+/g.test(this.password);
    const twoOfThree =
      (hasChars && hasSymbols && !hasNumbers) ||
      (hasChars && hasNumbers && !hasSymbols) ||
      (hasNumbers && hasSymbols && !hasChars);
    const threOfThree = hasChars && hasSymbols && hasNumbers;
    if (this.password.length === 0) {
      this.indicators = {
        leftBar: '',
        mediumBar: '',
        rightBar: '',
      };
    } else if (this.password.length < 8) {
      this.indicators = {
        leftBar: 'red',
        mediumBar: 'red',
        rightBar: 'red',
      };
    } else {
      this.indicators = {
        leftBar: twoOfThree ? ' yellow' : threOfThree ? 'green' : 'red',
        mediumBar: twoOfThree ? ' yellow' : threOfThree ? ' green' : '',
        rightBar: threOfThree ? ' green' : '',
      };
    }
  }
}
