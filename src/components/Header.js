import {LOGO_URL }from "../utils/constent";
 const Header = () => {

    return (
      <div className="header">
        <div className="log-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>about us</li>
            <li>contact us</li>
            <li>Cart</li>
  
          </ul>
        </div>
      </div>
    );
    
  };
  export default Header;