import React from "react";
import Menu from "./Menu";

export default ({ children }) => (
  <div>
    <Menu />
    {children}
  </div>
);
