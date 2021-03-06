import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <Fragment>
      <nav className={classes.topnav}>
        <Link to="/">
          <h1 className={classes.intro}>ReactFavorites</h1>
        </Link>
        <Link to="/products" className={classes.navlink}>
          Meals
        </Link>
        <Link to="/favorites" className={classes.navlink}>
          Favorites
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navigation;
