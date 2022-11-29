import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
  fullname = "Elmer Fudd";
  title = "aura";

  changeHandler(event) {
    this.title = event.target.value;
  }
}