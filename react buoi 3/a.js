"use strict";

const listProducts = [
  {
    id: "31",
    image:
      "https://testament-store.herokuapp.com/images/products/210218TaneishaStudio14642.jpg",
    title: "Arielle Dress",
    size: "6",
    color: "White",
    qty: 1,
    price: 69.99,
    total: "69.99"
  },
  {
    id: "29",
    image:
      "https://testament-store.herokuapp.com/images/products/20_09_10NatStudio19979.jpg",
    title: "Hamilton Playsuit",
    size: "8",
    color: "",
    qty: 4,
    price: 35.99,
    total: "143.96"
  }
];

const listPromo = [
  {
    name: "FREESHIP",
    text: "Free shipping fee",
    kind: "shipping",
    value: 100
  },
  {
    name: "DISCOUNT5",
    text: "Discount 5%",
    kind: "total",
    value: 5
  },
  {
    name: "DISCOUNT10",
    text: "Discount 10%",
    kind: "total",
    value: 10
  }
];

const CartContentHeader = (props) => {
  let products = props.products;
  return (
    <div className="row cart-content__header align-items-center">
      <div className="col-4">
        <a onClick={() => history.back()}>
          &lt; <span className="d-none d-md-inline">Continue Shopping</span>
        </a>
      </div>
      <div className="col-4 text-center">
        <h3 className="cart-content__title">Cart</h3>
      </div>
      <div className="col-4 text-right">{products.length} Item(s)</div>
    </div>
  );
};

const CartItems = (props) => {
  const {
    products,
    handleChangeQuantityButton,
    handleChangeQuantityInput,
    handleRemoveProduct
  } = props;
  const listItem = products.map((product) => (
    <CartItemContent
      product={product}
      handleChangeQuantityButton={handleChangeQuantityButton}
      handleChangeQuantityInput={handleChangeQuantityInput}
      handleRemoveProduct={handleRemoveProduct}
      key={product.id}
    />
  ));
  return <div className="cart-items">{listItem}</div>;
};

let CartItemContent = (props) => {
  const {
    product,
    handleChangeQuantityButton,
    handleChangeQuantityInput,
    handleRemoveProduct
  } = props;
  const { id, image, price, qty, color, size, title, total } = product;

  return (
    <ul className="d-flex flex-wrap align-items-center cart-item">
      <li className="item-image">
        <img src={image} />
      </li>
      <li className="item-details">
        <p className="item-details__title mb-3">
          <a href={"product.html?id=" + id}>{title}</a>
        </p>
        <div className="item-details__variants">
          {size != "" && (
            <p>
              <strong>Size:</strong> {size}
            </p>
          )}
          {color != "" && (
            <p>
              <strong>Color:</strong> {color}
            </p>
          )}
        </div>
      </li>
      <li className="item-price">
        <p>{moneyFormat(price)}</p>
      </li>
      <li className="item-quantity">
        <a
          className="qty-product-control qty-product-control-down"
          field={"qty-product-" + id}
          onClick={() => handleChangeQuantityButton(id, true)}
        >
          -
        </a>
        <input
          type="text"
          className="quantity"
          value={qty}
          onChange={(e) => handleChangeQuantityInput(id, e)}
        />
        <a
          className="qty-product-control qty-product-control-up"
          field={"qty-product-" + id}
          onClick={() => handleChangeQuantityButton(id)}
        >
          +
        </a>
      </li>
      <li className="item-total">
        <p>{moneyFormat(total)}</p>
      </li>
      <li className="item-remove" onClick={() => handleRemoveProduct(id)}>
        <img
          src="https://testament-store.herokuapp.com//images/icons/close.png"
          alt="Remove item"
        />
      </li>
    </ul>
  );
};

const CartInformation = () => (
  <div className="col-md-6 cart-infor">
    <div className="cart-infor__note">
      <a
        className="d-inline-block noteBtn mb-2"
        onClick={() => $("#noteTextarea").toggle()}
      >
        Leave a note with your order
      </a>
      <div id="noteTextarea">
        <textarea className="form-control" rows="5"></textarea>
      </div>
    </div>
    <div className="cart-infor__free-shipping mb-4">
      <div className="text-center free-shipping">
        <p className="mb-3">
          You are only $124.01 away from Free Domestic Shipping!
        </p>
        <small>(Excludes International)</small>
      </div>
    </div>
  </div>
);

const CartTotal = (props) => {
  const {
    subTotal,
    tax,
    shipping,
    promo,
    promoCode,
    addedCode,
    handlePromoCode,
    handleCheckPromoCode
  } = props.money;

  let total = subTotal + tax + shipping;
  total = Number(total.toFixed(2));

  return (
    <div className="col-md-6 cart_total">
      <div className="cart-total__details">
        <div className="subtotal d-flex">
          <p className="text-left mb-0">Subtotal</p>
          <p className="subtotal-price text-right mb-0">
            <span className="cart-price">{moneyFormat(subTotal)}</span>
          </p>
        </div>
        <div className="tax d-flex">
          <p className="text-left mb-0">VAT tax</p>
          <p className="text-right mb-0">{moneyFormat(tax)}</p>
        </div>
        <div className="shipping d-flex">
          <p className="text-left mb-0">Shipping fee</p>
          <p className="text-right mb-0">{moneyFormat(shipping)}</p>
        </div>
        <hr></hr>
        <div className="promo d-flex">
          {addedCode ? (
            <input
              type="text"
              id="promo--input"
              value={promoCode}
              className="form-control"
              disabled
            />
          ) : (
            <input
              type="text"
              id="promo--input"
              value={promoCode}
              className="form-control"
              onChange={handlePromoCode}
            />
          )}

          {addedCode ? (
            <button className="btn" type="submit" disabled>
              Apply
            </button>
          ) : (
            <button
              className="btn"
              type="submit"
              onClick={handleCheckPromoCode}
            >
              Apply
            </button>
          )}
        </div>
        {promo.text != "" && <p>{promo.text}</p>}
        <hr></hr>
        <div className="total d-flex">
          <p className="text-left mb-3">Total</p>
          <p className="subtotal-price text-right mb-3">
            <span className="cart-price">{moneyFormat(total)}</span>
          </p>
        </div>
      </div>
      <div className="cart-total__button">
        <input
          className="cart-total__button-submit"
          type="submit"
          id="submitCart"
          name="submitCart"
          value="Check Out"
        />
      </div>
    </div>
  );
};

const CartFooter = (props) => {
  return (
    <div className="row cart-footer">
      <CartInformation />
      <CartTotal money={props} />
    </div>
  );
};

let getSubTotalPrice = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += Number(product.total);
  });
  return Number(total.toFixed(2));
};

let getTax = (total) => Number((total * 0.1).toFixed(2));

let moneyFormat = (money) => {
  if (money == 0) {
    return "0";
  } else {
    let parts = money.toString().split("."),
      dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
      cents = parts[1] ? "." + parts[1] : ".00";
    return "$" + dollars + cents;
  }
};

const App = () => {
  let [products, setProducts] = React.useState(listProducts);
  let [subTotal, setSubTotal] = React.useState(getSubTotalPrice(products));
  let [tax, setTax] = React.useState(getTax(subTotal));

  let [shipping, setShipping] = React.useState(5);
  let [promo, setPromo] = React.useState({
    text: "",
    value: 0
  });

  let [promoCode, setPromoCode] = React.useState("");
  let [addedCode, setAddedCode] = React.useState(false);

  let handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id != id));
    calculateSubTotalAndTax(products.filter((product) => product.id != id));
  };
  let calculateSubTotalAndTax = (products) => {
    let newSubTotal = getSubTotalPrice(products);
    setSubTotal(newSubTotal);
    setTax(getTax(newSubTotal));
  };
  let handleChangeQuantityButton = (id, isDown = false) => {
    let foundIndex = products.findIndex((p) => id == p.id);

    let newProducts = [...products];
    if (foundIndex != -1) {
      newProducts[foundIndex].qty = !isDown
        ? newProducts[foundIndex].qty + 1
        : isDown && newProducts[foundIndex].qty > 1
        ? newProducts[foundIndex].qty - 1
        : newProducts[foundIndex].qty;
      newProducts[foundIndex].total = (
        newProducts[foundIndex].qty * newProducts[foundIndex].price
      ).toFixed(2);
      setProducts(newProducts);
      calculateSubTotalAndTax(newProducts);
    }
  };
  let handleChangeQuantityInput = (id, e) => {
    let newQty = e.target.value;

    if (!isNaN(newQty)) {
      newQty = parseInt(newQty, 10);
      let foundIndex = products.findIndex((p) => id == p.id);
      let newProducts = [...products];
      if (newQty > 0 && foundIndex != -1) {
        newProducts[foundIndex].qty = parseInt(e.target.value, 10);
        newProducts[foundIndex].total = (
          newProducts[foundIndex].qty * newProducts[foundIndex].price
        ).toFixed(2);
        setProducts(newProducts);
        calculateSubTotalAndTax(newProducts);
      }
    }
  };
  let handlePromoCode = (e) => {
    setPromoCode(e.target.value);
  };
  let handleCheckPromoCode = (e) => {
    e.preventDefault();
    let arr = listPromo.filter((p) => p.name == promoCode);
    if (arr.length > 0) {
      let resultArr = arr[0];
      let newPromo = {
        text: "This code does not exist",
        value: 0
      };
      if (resultArr.kind === "shipping") {
        newPromo = {
          text: resultArr.text,
          value: 0
        };
        setShipping(0);
      } else if (resultArr.kind === "total") {
        newPromo = {
          text: resultArr.text,
          value: resultArr.value
        };
      } else {
        newPromo = {
          text: "This code does not exist",
          value: 0
        };
      }

      if (newPromo.value > 0) {
        setSubTotal(
          Number((subTotal - (subTotal * newPromo.value) / 100).toFixed(2))
        );
        setTax(
          getTax(
            Number((subTotal - (subTotal * newPromo.value) / 100).toFixed(2))
          )
        );
      }
      setPromo(newPromo);
      setAddedCode(true);
    } else {
      setPromoCode("");
      setPromo({
        text: "This code does not exist",
        value: 0
      });
    }
  };
  return (
    <div className="cart_content--container">
      <CartContentHeader products={products} />
      {products.length > 0 ? (
        <form id="cart-infor-form" method="post" name="cart-infor-form">
          <CartItems
            products={products}
            handleChangeQuantityButton={handleChangeQuantityButton}
            handleChangeQuantityInput={handleChangeQuantityInput}
            handleRemoveProduct={handleRemoveProduct}
          />
          <CartFooter
            subTotal={subTotal}
            tax={tax}
            shipping={shipping}
            promo={promo}
            promoCode={promoCode}
            addedCode={addedCode}
            handlePromoCode={handlePromoCode}
            handleCheckPromoCode={handleCheckPromoCode}
          />
        </form>
      ) : (
        <h2 className="d-block cart_empty text-center">
          Your cart is currently empty.
        </h2>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".cart_content"));
