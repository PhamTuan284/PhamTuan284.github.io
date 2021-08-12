export default function Search({ onChangeSearch, onSubmitSearch }) {
  return (
    <form className="mb-3 d-flex" onSubmit={(e) => onSubmitSearch(e)}>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={onChangeSearch}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
