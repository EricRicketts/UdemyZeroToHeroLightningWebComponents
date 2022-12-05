import { createElement } from "lwc";
import HelloWorld from "c/helloWorld";

describe("c-hello-world", () => {
  let expected, results, element, div, paragraphs;
  beforeEach(() => {
    element = createElement("c-hello-world", {
      is: HelloWorld
    });
    document.body.appendChild(element);
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  describe("Initial Rendering", () => {
    it("the first div with text should render the title and full name properties", () => {
      // Arrange
      expected = ["Hello World", "Elmer Fudd", "LWC is a form of aura"];

      // Act
      div = element.shadowRoot.querySelector("div.first-div-with-text");
      paragraphs = Array.from(div.children);
      results = [
        paragraphs[0].textContent,
        paragraphs[1].textContent,
        paragraphs[2].textContent
      ];

      // Assert
      expect(results).toEqual(expected);
    });

    it("the second div with text should render the country, city, and postal code", () => {
      // Arrange
      expected = [
        "Melbourne is my city in the country of Australia",
        "My postal code is 3008"
      ];

      // Act
      div = element.shadowRoot.querySelector("div.second-div-with-text");
      paragraphs = Array.from(div.children);
      results = [paragraphs[0].textContent, paragraphs[1].textContent];

      // Assert
      expect(results).toEqual(expected);
    });

    it("the third div with text should render the user's full name and the product of two numbers", () => {
      // Arrange
      expected = [
        "The user's full name is: John Random Doe",
        "The two numbers 10 and 20 multiplied together are: 200"
      ];

      // Act
      div = element.shadowRoot.querySelector("div.third-div-with-text");
      paragraphs = Array.from(div.children);
      results = [paragraphs[0].textContent, paragraphs[1].textContent];

      // Assert
      expect(results).toEqual(expected);
    });
  });

  describe("Test Input Fields", () => {
    let inputs, firstInput, secondInput;
    it("should change the title upon user entry", () => {
      // Arrange
      expected = "LWC is a form of HTML Components";
      inputs = element.shadowRoot.querySelectorAll("lightning-input");
      firstInput = inputs.item(0);
      const selectedParagraph = element.shadowRoot.querySelector(
        "div.first-div-with-text :nth-child(3)"
      );

      // Act
      const str = "HTML Component";
      const arrayOfChars = Array.from(str.split(""));
      firstInput.addEventListener("keypress", (event) => {});
      arrayOfChars.forEach((char) => {
        firstInput.dispatchEvent("keypress", { key: `${char}` });
      });
      results = selectedParagraph.textContent;

      // Assert
      expect(results).toBe(expected);
    });
  });
});
