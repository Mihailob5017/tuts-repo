import React, { useState, lazy, Suspense } from "react";

// Page 1,Initial Load
import Page1 from "./components/Page1";
// Lazy load
const Page2 = lazy(() => import("./components/Page2"));
const Page3 = lazy(() => import("./components/Page3"));
const App = () => {
  const [page, setPage] = useState(1);
  const changePageHandler = (val) => setPage(val);
  return (
    <div>
      {page === 1 && <Page1 pagenumber={1} setPage={changePageHandler} />}
      <Suspense fallback={<h1>LMAO KYS</h1>}>
        {page === 2 && <Page2 pagenumber={2} setPage={changePageHandler} />}
        {page === 3 && <Page3 pagenumber={3} setPage={changePageHandler} />}
      </Suspense>
    </div>
  );
};

export default App;
