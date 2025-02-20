import React from "react";
import "./Header.css";
import netflixLogo from "../../assets/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <a href="#">
              <li>Home</li>
            </a>

            <a href="#">
              <li>TvShows</li>
            </a>
            <a href="#">
              <li>Movies</li>
            </a>
            <a href="#">
              <li>Latest</li>
            </a>
            <a href="#">
              <li>MyList</li>
            </a>
            <a href="#">
              <li>Browse by Languages</li>
            </a>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <a href="#">
              {" "}
              <li>
                <SearchIcon />
              </li>
            </a>
            <a href="#">
              {" "}
              <li>
                <NotificationsNoneIcon />
              </li>
            </a>
            <a href="#">
              {" "}
              <li>
                <AccountBoxIcon />
              </li>
            </a>
            <a href="#">
              {" "}
              <li>
                <ArrowDropDownIcon />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
