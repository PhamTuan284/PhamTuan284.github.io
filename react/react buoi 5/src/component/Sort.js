export default function Sort({ setSortInput }) {
  return (
    <select
      className="form-select"
      required
      onChange={(e) => setSortInput(e.target.value)}
    >
      {/* <option selected disabled value="">
        Sort
      </option> */}
      <option>Default</option>
      <option>Price descending</option>
      <option>Price ascending</option>
    </select>
  );
}
