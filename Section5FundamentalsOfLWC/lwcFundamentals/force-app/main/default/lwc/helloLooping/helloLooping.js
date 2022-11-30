import { LightningElement } from "lwc";

export default class HelloLooping extends LightningElement {
  carList = [
    "Ford",
    "Audi",
    "Maruti",
    "Hyundai",
    "Mercedes",
    "General Motors",
    "Honda"
  ];
  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "Sundar Pichai"
    },
    {
      id: 2,
      company: "Apple Inc",
      name: "Tim Cook"
    },
    {
      id: 3,
      company: "Meta",
      name: "Mark Zukerberg"
    },
    {
      id: 4,
      company: "Amazon",
      name: "Jeff Bezos"
    }
  ];
}
