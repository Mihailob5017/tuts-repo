import React from "react";

const Page3 = ({ setPage, pagenumber }) => {
  return (
    <div>
      <h1>Page 3</h1>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button
        disabled={pagenumber == 3 ? true : false}
        onClick={() => setPage(3)}
      >
        Page 3
      </button>
    </div>
  );
};

export default Page3;
