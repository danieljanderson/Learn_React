(function() {
  "use strict";
  // the create react element is first the type of element.  Then the properties of said element
  //Always Capitalize the name of your components. React needs to know the difference  between the actual components and regular html elements like divs.
  function ProductImage(props) {
    return React.createElement("img", {
      src: "../../../assets/red.jpg",
      alt: "Product image"
    });
  }

  function ProductCustomizer(props) {
    return React.createElement(
      "div",
      { className: "customizer" },
      React.createElement(
        "div",
        { className: "product-image" },
        React.createElement(ProductImage)
      )
    );
  }

  ReactDOM.render(
    React.createElement(ProductCustomizer),
    document.getElementById("react-root")
  );
})();
