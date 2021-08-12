import "./App.css";
import Search from "./component/Search";
import Sort from "./component/Sort";
import Table from "./component/Table";
import { useEffect, useState } from "react";

const url = "https://fake-rest-api-nodejs.herokuapp.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortInput, setSortInput] = useState("");

  //get data
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  //handle sort
  useEffect(() => {
    let sortUrl =
      sortInput === "Price descending"
        ? "?_sort=name&_order=desc"
        : sortInput === "Price ascending"
        ? "?_sort=name&_order=asc"
        : "";

    fetch(url + sortUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [sortInput]);

  //handle search
  function onSubmitSearch(e) {
    e.preventDefault();
    let searchUrl = "?q=";
    fetch(url + searchUrl + searchInput)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }

  function onChangeSearch(e) {
    setSearchInput(e.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">Product List</h1>

        <div className="row">
          <div className="col-4">
            <Search
              onSubmitSearch={onSubmitSearch}
              onChangeSearch={onChangeSearch}
            />
          </div>
          <div className="col-3"></div>
          <div className="col-4">
            <Sort setSortInput={setSortInput} />
          </div>
        </div>

        <Table products={products} />
      </div>
    </div>
  );
}

export default App;
