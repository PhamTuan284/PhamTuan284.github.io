const ITEMS = [
  {
    id: 1,
    src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=800hei=800fmt=jpegqlt=80fit=constrain.v=1603332211000",
    quantity: 3,
    name: "13-inch MacBook Air",
    price: 999,
    instalmentsTime: "Pay 0% APR for 12 months:",
    instalments: "$83.25/mo.",
  },
  {
    id: 2,
    src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJ1M2?wid=800hei=800fmt=jpegqlt=80fit=constrain.v=1591650473000",
    quantity: 1,
    name: "USB-C to USB Adapter",
    price: 19,
    instalmentsTime: "",
    instalments: "",
  },
];

const PROMOTION = ["discount", "discount10"];

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Item({
  items,
  removeItem,
  changeQuantity,
  decreaseQuantity,
  increaseQuantity,
}) {
  return items.map((item) => (
    <div className="item row" key={item.id}>
      <div className="col-3">
        <img src={item.src} />
      </div>
      <div className="col-9 ">
        <div className="item-infomation d-flex justify-content-between">
          <h3>{item.name}</h3>
          <div className="quantityWrapper d-flex align-items-center">
            <span
              className="quantityChange"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </span>
            <input
              type="text"
              className="quantity"
              onChange={(e) => changeQuantity(item.id, e)}
              value={item.quantity}
            ></input>
            <span
              className="quantityChange"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </span>
          </div>

          <h3 className="price">
            {formatter.format(item.price * item.quantity)}
          </h3>
        </div>
        <div className="item-infomation d-flex justify-content-between mt-3">
          <span>{item.instalmentsTime}</span>
          <span>{item.instalments}</span>
        </div>
        <div className="item-infomation d-flex justify-content-between mt-4">
          <a href="#">Show product detail</a>
          <a href="#" onClick={() => removeItem(item.id)}>
            Remove
          </a>
        </div>
        <hr className="mt-5" />
        <div className="item-infomation mt-4">
          <h4>Find out how soon you can get this item.</h4>
          <div className="d-flex mt-3">
            <span>
              <svg
                viewBox="0 0 25 25"
                className="me-2 as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced"
              >
                <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
              </svg>
              Ships in 3–5 business days.
            </span>
            <span className="ms-5">
              <svg
                viewBox="0 0 25 25"
                className="me-2 as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced"
              >
                <path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path>
                <path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path>
              </svg>
              Pick up at an Apple Store near you.
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
}

function CheckOut({
  shipping,
  total,
  subTotal,
  handleSubmit,
  handleChange,
  promotionInput,
  promotionValue,
  promotionText,
  applycode,
}) {
  return (
    <div className="checkout mt-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
          <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Promotion"
              className="form-control"
              value={promotionInput}
              onChange={handleChange}
              disabled={applycode ? true : false}
            ></input>
            <button
              className="promotionBtn btn btn-primary"
              type="submit"
              disabled={applycode ? true : false}
            >
              Apply
            </button>
          </form>
          <p className="promotionText">{promotionText}</p>
          <div className="item-infomation d-flex justify-content-between">
            <span>Subtotal</span>
            <span>{formatter.format(subTotal)}</span>
          </div>

          {applycode ? (
            <div className="item-infomation d-flex justify-content-between">
              <span>Promotion</span>
              <span>-{formatter.format(promotionValue)}</span>
            </div>
          ) : null}

          <div className="item-infomation d-flex justify-content-between">
            <span>Shipping</span>
            <span>{formatter.format(shipping)}</span>
          </div>
          <hr className="mt-4" />
          <div className="item-infomation d-flex justify-content-between">
            <h4>Total</h4>
            <h4>{formatter.format(total)}</h4>
          </div>
          <div className="item-infomation d-flex flex-row-reverse mt-4">
            <span type="button" className="btn btn-primary">
              Check out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

let getSubTotal = (items) => {
  let price = items.map((item) => item.price * item.quantity);
  if (price.length > 0) {
    return price.reduce((a, b) => a + b);
  }
};

function App() {
  const [listItems, setListItems] = React.useState(ITEMS);
  const [promotionInput, setPromotionInput] = React.useState("");
  const [subTotal, setSubTotal] = React.useState(getSubTotal(listItems));
  const [promotionValue, setPromotionValue] = React.useState(0);
  const [promotionText, setPromotionText] = React.useState("");
  const [applycode, setApplyCode] = React.useState(false);
  let shipping = 5;

  function removeItem(id) {
    setListItems(listItems.filter((item) => item.id != id));
    subTotalCal(listItems.filter((item) => item.id != id));
  }

  function subTotalCal(items) {
    let newSubTotal = getSubTotal(items);
    setSubTotal(newSubTotal);
    if (PROMOTION.includes(promotionInput)) {
      setPromotionValue(newSubTotal * 0.1);
    }
  }
  function handleChange(e) {
    setPromotionInput(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if (PROMOTION.includes(promotionInput)) {
      setSubTotal(subTotal - subTotal * 0.1);
      setPromotionValue(subTotal * 0.1);
      setPromotionText("Discount 10%");
      setApplyCode(true);
    } else {
      setPromotionValue(0);
      setPromotionText("Promotion is not available");
    }
  };

  let total = subTotal + shipping;

  function changeQuantity(id, e) {
    let newArr = [...ITEMS];
    let itemIndex = ITEMS.findIndex((item) => id == item.id);
    let inputQuantity = e.target.value;
    if (!isNaN(inputQuantity) && inputQuantity > 0) {
      newArr[itemIndex].quantity = Number(inputQuantity);
    }
    setListItems(newArr);
    subTotalCal(newArr);
  }

  function decreaseQuantity(id) {
    let newArr = [...listItems];
    let itemIndex = newArr.findIndex((item) => id == item.id);
    if (newArr[itemIndex].quantity > 1) {
      newArr[itemIndex].quantity = newArr[itemIndex].quantity - 1;
    } else {
      newArr[itemIndex].quantity = newArr[itemIndex].quantity;
    }
    setListItems(newArr);
    subTotalCal(newArr);
  }

  function increaseQuantity(id) {
    let newArr = [...listItems];
    let itemIndex = newArr.findIndex((item) => id == item.id);
    newArr[itemIndex].quantity = newArr[itemIndex].quantity + 1;
    setListItems(newArr);
    subTotalCal(newArr);
  }

  if (listItems.length > 0) {
    return (
      <div className="container">
        <h1 className="mt-5">Review your bag.</h1>
        <h5 className="mt-3">Free delivery and free returns.</h5>

        <Item
          items={listItems}
          removeItem={removeItem}
          changeQuantity={changeQuantity}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />

        <hr className="mt-5" />

        <CheckOut
          shipping={shipping}
          subTotal={subTotal}
          total={total}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          promotionValue={promotionValue}
          promotionInput={promotionInput}
          promotionText={promotionText}
          applycode={applycode}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1 className="mt-5">Review your bag.</h1>
        <h5 className="mt-3">Free delivery and free returns.</h5>
        <h1 className="mt-5">Your bag is empty</h1>
        <a href="#" className="mt-4 d-block">
          Continue Shopping
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
