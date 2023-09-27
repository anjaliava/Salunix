import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Login from './login';
// import Register from './Register';
function App() {
 return (
    <>
    {/* <BrowserRouter> */}
  <nav className="navbar fixed-top">
    <div className="d-flex align-items-center navbar-left">
      <a href="#" className="menu-button d-none d-md-block">
        <svg
          className="main"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9 17"
        >
          <rect x="0.48" y="0.5" width={7} height={1} />
          <rect x="0.48" y="7.5" width={7} height={1} />
          <rect x="0.48" y="15.5" width={7} height={1} />
        </svg>
        <svg
          className="sub"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 17"
        >
          <rect x="1.56" y="0.5" width={16} height={1} />
          <rect x="1.56" y="7.5" width={16} height={1} />
          <rect x="1.56" y="15.5" width={16} height={1} />
        </svg>
      </a>
      <a
        href="#"
        className="menu-button-mobile d-xs-block d-sm-block d-md-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
          <rect x="0.5" y="0.5" width={25} height={1} />
          <rect x="0.5" y="7.5" width={25} height={1} />
          <rect x="0.5" y="15.5" width={25} height={1} />
        </svg>
      </a>
      <div className="search" data-search-path="Pages.Search.html?q=">
        <input placeholder="Search..." />
        <span className="search-icon">
          <i className="simple-icon-magnifier" />
        </span>
      </div>
      <a
        className="btn btn-sm btn-outline-primary ml-3 d-none d-md-inline-block"
        href="https://1.envato.market/5kAb"
      >
        &nbsp;BUY&nbsp;
      </a>
    </div>
    <a className="navbar-logo" href="Dashboard.Default.html">
      <span className="logo d-none d-xs-block" />
      <span className="logo-mobile d-block d-xs-none" />
    </a>
    <div className="navbar-right">
      <div className="header-icons d-inline-block align-middle">
        <div className="d-none d-md-inline-block align-text-bottom mr-3">
          <div
            className="custom-switch custom-switch-primary-inverse custom-switch-small pl-1"
            data-toggle="tooltip"
            data-placement="left"
            title="Dark Mode"
          >
            <input
              className="custom-switch-input"
              id="switchDark"
              type="checkbox"
              defaultChecked=""
            />
            <label className="custom-switch-btn" htmlFor="switchDark" />
          </div>
        </div>
        <div className="position-relative d-none d-sm-inline-block">
          <button
            className="header-icon btn btn-empty"
            type="button"
            id="iconMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="simple-icon-grid" />
          </button>
          <div
            className="dropdown-menu dropdown-menu-right mt-3  position-absolute"
            id="iconMenuDropdown"
          >
            <a href="#" className="icon-menu-item">
              <i className="iconsminds-equalizer d-block" />
              <span>Settings</span>
            </a>
            <a href="#" className="icon-menu-item">
              <i className="iconsminds-male-female d-block" />
              <span>Users</span>
            </a>
            <a href="#" className="icon-menu-item">
              <i className="iconsminds-puzzle d-block" />
              <span>Components</span>
            </a>
            <a href="#" className="icon-menu-item">
              <i className="iconsminds-bar-chart-4 d-block" />
              <span>Profits</span>
            </a>
            <a href="#" className="icon-menu-item">
              <i className="iconsminds-file d-block" />
              <span>Surveys</span>
            </a>
            <a href="#" className="icon-menu-item">
              <i className="iconsminds-suitcase d-block" />
              <span>Tasks</span>
            </a>
          </div>
        </div>
        <div className="position-relative d-inline-block">
          <button
            className="header-icon btn btn-empty"
            type="button"
            id="notificationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="simple-icon-bell" />
            <span className="count">3</span>
          </button>
          <div
            className="dropdown-menu dropdown-menu-right mt-3 position-absolute"
            id="notificationDropdown"
          >
            <div className="scroll">
              <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                <a href="#">
                  <img
                    src="img/profiles/l-2.jpg"
                    alt="Notification Image"
                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                  />
                </a>
                <div className="pl-3">
                  <a href="#">
                    <p className="font-weight-medium mb-1">
                      Joisse Kaycee just sent a new comment!
                    </p>
                    <p className="text-muted mb-0 text-small">
                      09.04.2018 - 12:45
                    </p>
                  </a>
                </div>
              </div>
              <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                <a href="#">
                  <img
                    src="img/notifications/1.jpg"
                    alt="Notification Image"
                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                  />
                </a>
                <div className="pl-3">
                  <a href="#">
                    <p className="font-weight-medium mb-1">
                      1 item is out of stock!
                    </p>
                    <p className="text-muted mb-0 text-small">
                      09.04.2018 - 12:45
                    </p>
                  </a>
                </div>
              </div>
              <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                <a href="#">
                  <img
                    src="img/notifications/2.jpg"
                    alt="Notification Image"
                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                  />
                </a>
                <div className="pl-3">
                  <a href="#">
                    <p className="font-weight-medium mb-1">
                      New order received! It is total $147,20.
                    </p>
                    <p className="text-muted mb-0 text-small">
                      09.04.2018 - 12:45
                    </p>
                  </a>
                </div>
              </div>
              <div className="d-flex flex-row mb-3 pb-3 ">
                <a href="#">
                  <img
                    src="img/notifications/3.jpg"
                    alt="Notification Image"
                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                  />
                </a>
                <div className="pl-3">
                  <a href="#">
                    <p className="font-weight-medium mb-1">
                      3 items just added to wish list by a user!
                    </p>
                    <p className="text-muted mb-0 text-small">
                      09.04.2018 - 12:45
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="header-icon btn btn-empty d-none d-sm-inline-block"
          type="button"
          id="fullScreenButton"
        >
          <i className="simple-icon-size-fullscreen" />
          <i className="simple-icon-size-actual" />
        </button>
      </div>
      <div className="user d-inline-block">
        <button
          className="btn btn-empty p-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="name">Sarah Kortney</span>
          <span>
            <img alt="Profile Picture" src="img/profiles/l-1.jpg" />
          </span>
        </button>
        <div className="dropdown-menu dropdown-menu-right mt-3">
          <a className="dropdown-item" href="#">
            Account
          </a>
          <a className="dropdown-item" href="#">
            Features
          </a>
          <a className="dropdown-item" href="#">
            History
          </a>
          <a className="dropdown-item" href="#">
            Support
          </a>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div className="menu">
  <div className="main-menu">
    <div className="scroll">
      <ul className="list-unstyled">
        <li className="active">
          <a href="#dashboard">
            <i className="iconsminds-shop-4" />
            <span>Dashboards</span>
          </a>
        </li>
        <li>
          <a href="#layouts">
            <i className="iconsminds-digital-drawing" /> Pages
          </a>
        </li>
        <li>
          <a href="#applications">
            <i className="iconsminds-air-balloon-1" /> Applications
          </a>
        </li>
        <li>
          <a href="#ui">
            <i className="iconsminds-pantone" /> UI
          </a>
        </li>
        <li>
          <a href="#menu">
            <i className="iconsminds-three-arrow-fork" /> Menu
          </a>
        </li>
        <li>
          <a href="Blank.Page.html">
            <i className="iconsminds-bucket" /> Blank Page
          </a>
        </li>
        <li>
          <a
            href="https://dore-jquery-docs.coloredstrategies.com"
            target="_blank"
          >
            <i className="iconsminds-library" /> Docs
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="sub-menu">
    <div className="scroll">
      <ul className="list-unstyled" data-link="dashboard">
        <li>
          <a href="Dashboard.Default.html">
            <i className="simple-icon-rocket" />{" "}
            <span className="d-inline-block">Default</span>
          </a>
        </li>
        <li className="active">
          <a href="Dashboard.Analytics.html">
            <i className="simple-icon-pie-chart" />{" "}
            <span className="d-inline-block">Analytics</span>
          </a>
        </li>
        <li>
          <a href="Dashboard.Ecommerce.html">
            <i className="simple-icon-basket-loaded" />{" "}
            <span className="d-inline-block">Ecommerce</span>
          </a>
        </li>
        <li>
          <a href="Dashboard.Content.html">
            <i className="simple-icon-doc" />{" "}
            <span className="d-inline-block">Content</span>
          </a>
        </li>
      </ul>
      <ul className="list-unstyled" data-link="layouts" id="layouts">
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseAuthorization"
            aria-expanded="true"
            aria-controls="collapseAuthorization"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Authorization</span>
          </a>
          <div id="collapseAuthorization" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="">
                {/* <Link to="/login"> */}
                  <i className="simple-icon-user-following" />{" "}
                  <span className="d-inline-block">Login</span>
                  {/* </Link> */}
                </a>
                {/* <button><Link to="/login">Login</Link></button> */}

              </li>
              <li>
                <a href="">
                {/* <Link to="/register"> */}
                  <i className="simple-icon-user-follow" />{" "}
                  <span className="d-inline-block">Register</span>
                  {/* </Link> */}

                </a>
              </li>
              <li>
                <a href="Pages.Auth.ForgotPassword.html">
                  <i className="simple-icon-user-unfollow" />{" "}
                  <span className="d-inline-block">Forgot Password</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseProduct"
            aria-expanded="true"
            aria-controls="collapseProduct"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Product</span>
          </a>
          <div id="collapseProduct" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Pages.Product.List.html">
                  <i className="simple-icon-credit-card" />{" "}
                  <span className="d-inline-block">Data List</span>
                </a>
              </li>
              <li>
                <a href="Pages.Product.Thumbs.html">
                  <i className="simple-icon-list" />{" "}
                  <span className="d-inline-block">Thumb List</span>
                </a>
              </li>
              <li>
                <a href="Pages.Product.Images.html">
                  <i className="simple-icon-grid" />{" "}
                  <span className="d-inline-block">Image List</span>
                </a>
              </li>
              <li>
                <a href="Pages.Product.Detail.html">
                  <i className="simple-icon-book-open" />{" "}
                  <span className="d-inline-block">Detail</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseProfile"
            aria-expanded="true"
            aria-controls="collapseProfile"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Profile</span>
          </a>
          <div id="collapseProfile" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Pages.Profile.Social.html">
                  <i className="simple-icon-share" />{" "}
                  <span className="d-inline-block">Social</span>
                </a>
              </li>
              <li>
                <a href="Pages.Profile.Portfolio.html">
                  <i className="simple-icon-link" />{" "}
                  <span className="d-inline-block">Portfolio</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseBlog"
            aria-expanded="true"
            aria-controls="collapseBlog"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Blog</span>
          </a>
          <div id="collapseBlog" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Pages.Blog.html">
                  <i className="simple-icon-list" />{" "}
                  <span className="d-inline-block">List</span>
                </a>
              </li>
              <li>
                <a href="Pages.Blog.Detail.html">
                  <i className="simple-icon-book-open" />{" "}
                  <span className="d-inline-block">Detail</span>
                </a>
              </li>
              <li>
                <a href="Pages.Blog.Detail.Alt.html">
                  <i className="simple-icon-picture" />{" "}
                  <span className="d-inline-block">Detail Alt</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseMisc"
            aria-expanded="true"
            aria-controls="collapseMisc"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Miscellaneous</span>
          </a>
          <div id="collapseMisc" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Pages.Misc.Coming.Soon.html">
                  <i className="simple-icon-hourglass" />{" "}
                  <span className="d-inline-block">Coming Soon</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Error.html">
                  <i className="simple-icon-exclamation" />{" "}
                  <span className="d-inline-block">Error</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Faq.html">
                  <i className="simple-icon-question" />{" "}
                  <span className="d-inline-block">Faq</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Invoice.html">
                  <i className="simple-icon-bag" />{" "}
                  <span className="d-inline-block">Invoice</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Knowledge.Base.html">
                  <i className="simple-icon-graduation" />{" "}
                  <span className="d-inline-block">Knowledge Base</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Mailing.html">
                  <i className="simple-icon-envelope-open" />{" "}
                  <span className="d-inline-block">Mailing</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Pricing.html">
                  <i className="simple-icon-diamond" />{" "}
                  <span className="d-inline-block">Pricing</span>
                </a>
              </li>
              <li>
                <a href="Pages.Misc.Search.html">
                  <i className="simple-icon-magnifier" />{" "}
                  <span className="d-inline-block">Search</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="list-unstyled" data-link="applications">
        <li>
          <a href="Apps.MediaLibrary.html">
            <i className="simple-icon-picture" />{" "}
            <span className="d-inline-block">Library</span>
          </a>
        </li>
        <li>
          <a href="Apps.Todo.List.html">
            <i className="simple-icon-check" />{" "}
            <span className="d-inline-block">Todo</span>
          </a>
        </li>
        <li>
          <a href="Apps.Survey.List.html">
            <i className="simple-icon-calculator" />{" "}
            <span className="d-inline-block">Survey</span>
          </a>
        </li>
        <li>
          <a href="Apps.Chat.html">
            <i className="simple-icon-bubbles" />{" "}
            <span className="d-inline-block">Chat</span>
          </a>
        </li>
      </ul>
      <ul className="list-unstyled" data-link="ui">
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseForms"
            aria-expanded="true"
            aria-controls="collapseForms"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Forms</span>
          </a>
          <div id="collapseForms" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Ui.Forms.Components.html">
                  <i className="simple-icon-event" />{" "}
                  <span className="d-inline-block">Components</span>
                </a>
              </li>
              <li>
                <a href="Ui.Forms.Layouts.html">
                  <i className="simple-icon-doc" />{" "}
                  <span className="d-inline-block">Layouts</span>
                </a>
              </li>
              <li>
                <a href="Ui.Forms.Validation.html">
                  <i className="simple-icon-check" />{" "}
                  <span className="d-inline-block">Validation</span>
                </a>
              </li>
              <li>
                <a href="Ui.Forms.Wizard.html">
                  <i className="simple-icon-magic-wand" />{" "}
                  <span className="d-inline-block">Wizard</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseDataTables"
            aria-expanded="true"
            aria-controls="collapseDataTables"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Datatables</span>
          </a>
          <div id="collapseDataTables" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Ui.Datatables.Rows.html">
                  <i className="simple-icon-screen-desktop" />{" "}
                  <span className="d-inline-block">Full Page UI</span>
                </a>
              </li>
              <li>
                <a href="Ui.Datatables.Scroll.html">
                  <i className="simple-icon-mouse" />{" "}
                  <span className="d-inline-block">Scrollable</span>
                </a>
              </li>
              <li>
                <a href="Ui.Datatables.Pagination.html">
                  <i className="simple-icon-notebook" />{" "}
                  <span className="d-inline-block">Pagination</span>
                </a>
              </li>
              <li>
                <a href="Ui.Datatables.Default.html">
                  <i className="simple-icon-grid" />{" "}
                  <span className="d-inline-block">Default</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseComponents"
            aria-expanded="true"
            aria-controls="collapseComponents"
            className="rotate-arrow-icon opacity-50"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Components</span>
          </a>
          <div id="collapseComponents" className="collapse show">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Ui.Components.Alerts.html">
                  <i className="simple-icon-bell" />{" "}
                  <span className="d-inline-block">Alerts</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Badges.html">
                  <i className="simple-icon-badge" />{" "}
                  <span className="d-inline-block">Badges</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Buttons.html">
                  <i className="simple-icon-control-play" />{" "}
                  <span className="d-inline-block">Buttons</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Cards.html">
                  <i className="simple-icon-layers" />{" "}
                  <span className="d-inline-block">Cards</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Carousel.html">
                  <i className="simple-icon-picture" />{" "}
                  <span className="d-inline-block">Carousel</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Charts.html">
                  <i className="simple-icon-chart" />{" "}
                  <span className="d-inline-block">Charts</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Collapse.html">
                  <i className="simple-icon-arrow-up" />{" "}
                  <span className="d-inline-block">Collapse</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Dropdowns.html">
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Dropdowns</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Editors.html">
                  <i className="simple-icon-book-open" />{" "}
                  <span className="d-inline-block">Editors</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Icons.html">
                  <i className="simple-icon-star" />{" "}
                  <span className="d-inline-block">Icons</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.InputGroups.html">
                  <i className="simple-icon-note" />{" "}
                  <span className="d-inline-block">Input Groups</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Jumbotron.html">
                  <i className="simple-icon-screen-desktop" />{" "}
                  <span className="d-inline-block">Jumbotron</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Modal.html">
                  <i className="simple-icon-docs" />{" "}
                  <span className="d-inline-block">Modal</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Navigation.html">
                  <i className="simple-icon-cursor" />{" "}
                  <span className="d-inline-block">Navigation</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.PopoverandTooltip.html">
                  <i className="simple-icon-pin" />{" "}
                  <span className="d-inline-block">Popover &amp; Tooltip</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Sortable.html">
                  <i className="simple-icon-shuffle" />{" "}
                  <span className="d-inline-block">Sortable</span>
                </a>
              </li>
              <li>
                <a href="Ui.Components.Tables.html">
                  <i className="simple-icon-grid" />{" "}
                  <span className="d-inline-block">Tables</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="list-unstyled" data-link="menu" id="menuTypes">
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseMenuTypes"
            aria-expanded="true"
            aria-controls="collapseMenuTypes"
            className="rotate-arrow-icon"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Menu Types</span>
          </a>
          <div
            id="collapseMenuTypes"
            className="collapse show"
            data-parent="#menuTypes"
          >
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="Menu.Default.html">
                  <i className="simple-icon-control-pause" />{" "}
                  <span className="d-inline-block">Default</span>
                </a>
              </li>
              <li>
                <a href="Menu.Subhidden.html">
                  <i className="simple-icon-arrow-left mi-subhidden" />{" "}
                  <span className="d-inline-block">Subhidden</span>
                </a>
              </li>
              <li>
                <a href="Menu.Hidden.html">
                  <i className="simple-icon-control-start mi-hidden" />{" "}
                  <span className="d-inline-block">Hidden</span>
                </a>
              </li>
              <li>
                <a href="Menu.Mainhidden.html">
                  <i className="simple-icon-control-rewind mi-hidden" />{" "}
                  <span className="d-inline-block">Mainhidden</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseMenuLevel"
            aria-expanded="true"
            aria-controls="collapseMenuLevel"
            className="rotate-arrow-icon collapsed"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Menu Levels</span>
          </a>
          <div
            id="collapseMenuLevel"
            className="collapse"
            data-parent="#menuTypes"
          >
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="#">
                  <i className="simple-icon-layers" />{" "}
                  <span className="d-inline-block">Sub Level</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseMenuLevel2"
                  aria-expanded="true"
                  aria-controls="collapseMenuLevel2"
                  className="rotate-arrow-icon collapsed"
                >
                  <i className="simple-icon-arrow-down" />{" "}
                  <span className="d-inline-block">Another Level</span>
                </a>
                <div id="collapseMenuLevel2" className="collapse">
                  <ul className="list-unstyled inner-level-menu">
                    <li>
                      <a href="#">
                        <i className="simple-icon-layers" />{" "}
                        <span className="d-inline-block">Sub Level</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            data-toggle="collapse"
            data-target="#collapseMenuDetached"
            aria-expanded="true"
            aria-controls="collapseMenuDetached"
            className="rotate-arrow-icon collapsed"
          >
            <i className="simple-icon-arrow-down" />{" "}
            <span className="d-inline-block">Detached</span>
          </a>
          <div id="collapseMenuDetached" className="collapse">
            <ul className="list-unstyled inner-level-menu">
              <li>
                <a href="#">
                  <i className="simple-icon-layers" />{" "}
                  <span className="d-inline-block">Sub Level</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="dont-close-menu">
            <a href="#">
              <i className="simple-icon-arrow-right" />{" "}
              <span className="d-inline-block">Keep Sub Open</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

   

    <footer class="page-footer">
        <div class="footer-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <p class="mb-0 text-muted">ColoredStrategies 2019</p>
                    </div>
                    <div class="col-sm-6 d-none d-sm-block">
                        <ul class="breadcrumb pt-0 pr-0 float-right">
                            <li class="breadcrumb-item mb-0">
                                <a href="#" class="btn-link">Review</a>
                            </li>
                            <li class="breadcrumb-item mb-0">
                                <a href="#" class="btn-link">Purchase</a>
                            </li>
                            <li class="breadcrumb-item mb-0">
                                <a href="#" class="btn-link">Docs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>

    </Routes>
    </BrowserRouter> */}
 
  
</>        
        );  
      }
 
export default App;

// const script = document.createElement('script');
// script.src = 'js/vendor/jquery-3.3.1.min.js';
// script.async = true;
// document.body.appendChild(script)
