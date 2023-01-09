import { createElement } from "lwc";
import HelloWorldInitial from "c/helloWorldInitial";

describe("c-hello-world-initial", () => {
  let element;
  beforeEach(() => {
    element = createElement("c-hello-world-initial", {
      is: HelloWorldInitial
    });

    document.body.appendChild(element);
  });
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("Renders paragraph content", () => {
    const p = element.shadowRoot.querySelector("div > p");
    expect(p.textContent).toBe("Hello World!");
  });
});
