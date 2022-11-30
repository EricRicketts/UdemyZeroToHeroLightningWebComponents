import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
  fullname = "Elmer Fudd";
  title = "aura";
  address = {
    city: "Melbourne",
    postcode: 3008,
    country: "Australia"
  }
  changeHandler(event) {
    this.title = event.target.value;
  }
  trackHandler(event) {
    this.address = {...this.address, "city": event.target.value}; 
  }
}