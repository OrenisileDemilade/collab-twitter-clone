import { Search } from "@mui/icons-material";
import React from "react";
import classes from './Header.module.css'

export default function Header() {
  return (
    <div className={classes.header}>
      <input placeholder="search twitter" />
      <div className={classes.search}>
              <Search className={classes.icon} />
      </div>
    </div>
  );
}
