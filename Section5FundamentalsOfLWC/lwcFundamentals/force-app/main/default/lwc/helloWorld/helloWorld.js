import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  fullname = "Elmer Fudd";
  title = "aura";
  @track address = {
    city: "Melbourne",
    postcode: 3008,
    country: "Australia"
  };
  users = ["John", "Doe", "Random"];
  num1 = 10;
  num2 = 20;

  changeHandler(event) {
    this.title = event.target.value;
  }

  trackHandler(event) {
    this.address = { ...this.address, city: event.target.value };
  }

  get firstUser() {
    return this.users[0] + " " + this.users[2] + " " + this.users[1];
  }

  get multiplyNums() {
    return this.num1 * this.num2;
  }
}
