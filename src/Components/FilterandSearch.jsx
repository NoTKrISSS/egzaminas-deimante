import { useState } from "react";

function FilterandSearch({ nameTypes, setFilterBy, reset }) {
  const [filterValue, setFilterValue] = useState("");
  // handling filter select state
  const selectFilter = (e) => {
    setFilterValue(e.target.value);
    setFilterBy(e.target.value);
    console.log(e.target.value);
  };

  //reset handler
  const resetHandler = () => {
    reset();
    setFilterValue(" ");
  };
  // rendering filter select and search
  return (
    <div className="filter">
      <div>
        <span>Filter by name</span>
        <select onChange={selectFilter} value={filterValue}>
          <option value="">Select name</option>
          {nameTypes.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={resetHandler}>RESET</button>
      <div>
        <span>name: </span>
        <select name="" id=""></select>
      </div>
      <div></div>

      <button>Add</button>
    </div>
  );
}

export default FilterandSearch;
