import $ from 'jquery'; //no need to specify path since this is now a library

export class ChatForm {
  constructor(formSel, inputSel) {
    this.$form = formSel;
    this.$input = inputSel;
  }

  init(submitCallback) {
    this.$form.submit((event) {
      event.preventDefault();
      let val = this.$input.val();
      // grab value and assign to variable
      submitCallback(val);
      this.$input.val('');
      // reset input field
    });

  this.$form.find('button').on('click', () => this.$form.submit());
  // omit curly braces when returning the result of a singe statement👆
  }
}
