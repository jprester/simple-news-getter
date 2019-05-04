import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchInputContainer from '../../containers/SearchInputContainer';
import { CATEGORY } from '../../helpers/apiConfig';
import CategoryNavigation from '../widgets/CategoryNavigation/CategoryNavigation';

const Header = (props: any) => {
  return (
    <div className="header-container">
      <div className="content-wrapper">
        <div className="navigation-content">
          <h1 className="logo"><Link className="header-logo-link" to="/">News Getter</Link></h1>
          <div className="navigation-right">
            <Link className="header-nav-link" to="/about">About</Link>
            {/* <button
              className="mobile-menu-button"
              onClick={() => props.showMenu(props.menuVisible ? false : true)}>
                  {props.menuVisible ? "hide" : "show"}
            </button> */}
            <button className= {props.menuVisible ? "mobile-menu-button change" : "mobile-menu-button"}
              onClick={() => props.showMenu(props.menuVisible ? false : true)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </button>
          </div>
        </div>
      </div>

      <div className={props.menuVisible ? 'mobile-menu visible' : 'mobile-menu hidden'}>
        <div className="content-wrapper">
          <SearchInputContainer history={props.history} />
          <h4 className="menu-title">Category</h4>
          <CategoryNavigation data={CATEGORY} />
        </div>
      </div>
    </div>
  );
};

export default Header;