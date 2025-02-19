import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <p>HBTU-KART</p>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="nav-search">
            <input placeholder="Search Products" className="search-input" />
            <button className="searchbtn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <button className="sellbtn" onClick={() => navigate("/addProduct")}>
            Sell Item
          </button>
          <button className="plusicon">
            <i class="fa-solid fa-plus"></i>{" "}
          </button>
          <div className="profile">
            <i className="fa-solid fa-user"></i>
            <a href="/profile">My Profile</a>
          </div>
        </div>
        <div className="panel">
          <div className="back2home">
            <i className="fa-solid fa-house"></i>
            <p>Back to Home</p>
          </div>
          <div className="menu">
            <div className="wishlist">
              <i className="fa-solid fa-heart"></i>
              <p>Wishlist</p>
            </div>
            <div className="mycart">
              <i className="fa-solid fa-basket-shopping"></i>
              <p>My Cart</p>
            </div>
            <div className="contactus">
              <i className="fa-solid fa-phone"></i>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="logout">
            <p>
              {" "}
              <a href="/">Log out</a>
            </p>
            <a href="/">
              {" "}
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container">
          {/* You can map through your data and render the product cards here */}
          <div className="card">
            <div className="cardimg">
              <img src="https://via.placeholder.com/400x200" alt="" />
            </div>
            <div className="cardcontent">
              <p id="productcost">Rs. 100</p>
              <p id="producttitle">Product Title</p>
              <p className="parameters">Used For:</p>
              <p id="usedfor">2 years</p>
              <p className="parameters">Original Cost:</p>
              <p id="originalcost"> Rs. 500</p>
              <p className="parameters">Product Description:</p>
              <p id="prodDescp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className="cardactions">
              <p>Contact Seller</p>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
