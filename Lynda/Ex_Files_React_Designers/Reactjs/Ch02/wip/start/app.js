(function() {
  "use strict";
  // the create react element is first the type of element.  Then the properties of said element
  //Always Capitalize the name of your components. React needs to know the difference  between the actual components and regular html elements like divs.
  function SizeSelector(props) {
    function sizeOptions() {
      var size = window.Inventory.allSizes;
      return sizes.map(function(num) {
        return (
          <option value={num} key={num}>
            Size:{num}
          </option>
        );
      });
    }
    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select name="sizeOptions" id="size-options">
          {sizeOptions}
        </select>/>
      </div>
    );
  }
  function ProductImage(props) {
    return <img src="../../../assets/red.jpg" alt="Product image" />;
  }

  function ProductCustomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
        <div className="selectors">
          <SizeSelector />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
