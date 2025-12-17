import React from "react";

function SearchAdmin({ handleClickOpen, handleSearch, title , name}) {
  return (
    <div className="flex justify-between">
      <h3 className="text-xl font-bold">{name}</h3>

      <input
        type="text"
        placeholder="Enter keyWords"
        className="border p-2 rounded-xl w-1/3"
        onChange={handleSearch}
      />

      <button
        onClick={handleClickOpen}
        className="border p-2 rounded-xl bg-green-700"
      >
        {title}
      </button>
    </div>
  );
}

export default SearchAdmin;
