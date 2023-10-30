import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  E404Page,
  DemoPage,
} from "../pages";

const App = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<DemoPage/>}
      />
      <Route path="/*" element={<E404Page />} />
    </Routes>
  );
};
export default App;
