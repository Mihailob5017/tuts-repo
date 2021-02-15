import React from "react";

const Page2 = ({ setPage, pagenumber }) => {
  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button
        disabled={pagenumber == 2 ? true : false}
        onClick={() => setPage(2)}
      >
        Page 2
      </button>
      <button onClick={() => setPage(3)}>Page 3</button>
    </div>
  );
};

export default Page2;
