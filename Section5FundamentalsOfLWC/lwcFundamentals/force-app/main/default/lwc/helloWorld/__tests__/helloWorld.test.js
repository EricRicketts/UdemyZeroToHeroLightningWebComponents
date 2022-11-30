import { createElement } from "lwc";
import HelloWorld from "c/helloWorld";

describe("c-hello-world", () => {
  let expected, results;
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  describe("Initial Rendering", () => {
    it("the first div with text should render the title and full name properties", () => {
      // Arrange
      const element = createElement("c-hello-world", {
        is: HelloWorld
      });
      expected = ["Hello World", "Elmer Fudd", "LWC is a form of aura"];

      // Act
      document.body.appendChild(element);
      const div = element.shadowRoot.querySelector("div.first-div-with-text");
      const paragraphs = Array.from(div.children);
      results = [
        paragraphs[0].textContent,
        paragraphs[1].textContent,
        paragraphs[2].textContent
      ];
      // Assert
      // const div = element.shadowRoot.querySelector('div');
      expect(results).toEqual(expected);
    });
  });
});
