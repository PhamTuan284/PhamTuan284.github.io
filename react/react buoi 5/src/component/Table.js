export default function Table({ products }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <img src={product.thumbnail} alt="thumbnail" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}