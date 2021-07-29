let products = [
  {
    id: 1,
    name: "Nike ZoomX Vaporfly Next% x Gyakusou",
    src:
      "https://images.nike.com/is/image/DotCom/CT4894_600_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    price: 300,
    quantity: 1,
    priceShipping: 5
  },
  {
    id: 2,
    name: "Nike Blazer Low '77 Vintage",
    src:
      "https://images.nike.com/is/image/DotCom/DA6364_101_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    price: 85,
    quantity: 1,
    priceShipping: 2
  },
  {
    id: 3,
    name: "Nike Blazer Low '77 Vintage",
    src:
      "https://images.nike.com/is/image/DotCom/DD1633_451_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
    price: 25,
    quantity: 1,
    priceShipping: 2
  }
];

let moneyFormat = (money) => {
  if (money == 0) {
    return "0";
  } else {
    let parts = money.toString().split("."),
      dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
      cents = parts[1] ? "." + parts[1] : "";
    return "$" + dollars + cents;
  }
};

function MemberBox() {
  return (
    <div className="container p-0">
      <div className="box">
        <h5 className="member-heading m-0">Free Shipping for Members</h5>
        <div className="para d-flex">
          <p>Become a Nike Member for fast and free shipping.</p>
          <button>Join Us</button>
          <span>or</span>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

function Shipping() {
  return (
    <div className="my-2">
      <div>
        <p className="fweight-500">Free Shipping</p>
        <div className="d-flex">
          <p>Arrives Tue, Jul 27 - Thu, Jul 29</p>
          <button className="text-under">Edit Location</button>
        </div>
      </div>
      <div>
        <p className="fweight-500">Pick up</p>
        <button className="p-0 text-under">Find a store</button>
      </div>
      <hr />
    </div>
  );
}

function Products(props) {
  const { products, removeProduct, changeQuantity } = props;
  
  return products.map((product) => (
    <div key={product.id} className="container p-0">
      <div className="row product-info">
        <div className="col-2">
          <img src={product.src} />
        </div>
        <div className="col-8 ">
          <p className="product-name">{product.name}</p>
          <p className="my-1">Running Shoe</p>
          <p className="my-1">University Red/Sail/Blackened Blue</p>
          <div className="my-1 product-select">
            <label>Size</label>
            <select>
              <option>M 8 / W 9.5</option>
              <option>M 8.5 / W 10</option>
              <option>M 9 / W 10.5</option>
              <option>M 9.5 / W 11</option>
            </select>
            <label className="mx-3">
              Quantity
              <input
                type="text"
                className="ms-2 border-none"
                placeholder={1}
                onInput={(e) => changeQuantity(product.id, e)}
              />
            </label>
          </div>
          <div className="my-1 product-button">
            <button className="p-0 text-under">Move to Favorites</button>
            <button
              className="mx-3 text-under"
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="col-2 product-price">
          <p className="text-end fweight-bold">
            {moneyFormat(product.price * product.quantity)}
          </p>
        </div>
        <Shipping />
      </div>
    </div>
  ));
}

function ListAside(props) {
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className={props.fontWeight}>{props.name}</p>
          <span className="ms-1">{props.icon}</span>
        </div>
        <p className="fweight-bold">{props.price}</p>
      </div>
    </div>
  );
}

function AsideBar(props) {
  let { products } = props;

  function subTotal() {
    let temp = products.map((product) => product.price * product.quantity);
    return temp.reduce((prev, current) => prev + current);
  }

  function shipping() {
    let temp = products.map((product) => product.priceShipping);
    return temp.reduce((prev, current) => prev + current);
  }

  function tax() {
    return subTotal() * 0.1;
  }

  function total() {
    return subTotal() + shipping() + tax();
  }

  return (
    <div className="aside-bar">
      <h5>Summary</h5>
      <div className="my-3">
        <div className="d-flex">
          <p>Do you have a Promo Code</p>
          <button>
            <i className="bi bi-chevron-down"></i>
          </button>
          <i className="bi bi-question-circle-fill"></i>
        </div>
        <div className="promo-input d-flex">
          <input className="me-2"></input>
          <button>Apply</button>
        </div>
      </div>
      <ListAside
        name="Subtotal"
        price={moneyFormat(subTotal())}
        icon={<i className="bi bi-question-circle-fill"></i>}
      />
      <ListAside name="Estimated Shipping & Handling" price={shipping()} />
      <ListAside
        name="Estimated Tax"
        price={moneyFormat(tax())}
        icon={<i className="bi bi-question-circle-fill"></i>}
      />
      <hr />
      <ListAside
        name="Total"
        fontWeight="fweight-500"
        price={moneyFormat(total())}
      />
      <hr />
      <button className="button-aside button-checkout">Checkout</button>
      <button className="button-aside button-paypal">PayPal</button>
    </div>
  );
}

// function NameForm(props) {
//   const [inputValue, setInputValue] = React.useState("");

//   function handleChange(event) {
//     if (!isNaN(event.target.value)) {
//        setInputValue(event.target.value);
//     } 
//   }

//   function handleSubmit(event) {
//     alert("A name was submitted: " + inputValue);
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={inputValue} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

function App() {
  let [list, updateList] = React.useState(products);

  function handleRemoveProduct(id) {
    updateList(list.filter((product) => product.id !== id));
  }

  function handleChangeQuantity(id, e) {
    let getNewQuatity = parseInt(e.target.value);
    let foundIndex = products.findIndex((product) => id == product.id);
    let newProducts = [...products];
    if (getNewQuatity > 0) {
      newProducts[foundIndex].quantity = getNewQuatity;
      updateList(newProducts);
    }
  }

  let listProductLength = list.length;

  if (listProductLength === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-9">
            <MemberBox />
            <h3 className="my-4">Bag</h3>
            <h5>Bag empty</h5>
          </div>
          <div className="cod-md-12 col-lg-3">
            <AsideBar products={list} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-9">
          <MemberBox />
          <h3 className="my-4">Bag</h3>
          <Products
            products={list}
            removeProduct={handleRemoveProduct}
            changeQuantity={handleChangeQuantity}
          />
        </div>
        <div className="cod-md-12 col-lg-3">
          <AsideBar products={list} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
