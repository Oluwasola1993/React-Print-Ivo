import React from "react";
import whatsapp from "../assets/Images/whats.svg";
import print from "../assets/Images/print.svg";
import Naija from "../assets/Images/Naija.svg";
import Cart from "../assets/Images/cart.svg";
import Search from "../assets/Images/search.svg";
import printCard from "../assets/Images/printcard.png";
import card1 from "../assets/Images/printivo (1).png";
import logos from "../assets/Images/Group_61.png";
import bird from "../assets/Images/download (4).svg";
import clock from "../assets/Images/download (14).svg";
import web from "../assets/Images/download (15).svg";
// import wallet from "../assets/Images/download ().svg";
import fb from "../assets/Images/fb.svg";
import twit from "../assets/Images/twit.svg";
import lin from "../assets/Images/in.svg";
import ig from "../assets/Images/ig.svg";
import payment from "../assets/Images/payment.png";
import shipping from "../assets/Images/shipping (1).png";
import techCrunch from "../assets/Images/techcrun.svg";
import forbes from "../assets/Images/forbes.svg";
import techPoint from "../assets/Images/techPoint.png";
import techCabal from "../assets/Images/techCabal.svg";
import cnn from "../assets/Images/cnn.svg";
import "../assets/Styles/Navbar.css";
import "../components/Script.js";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#f7f6f4" }}
      >
        <div className="container-fluid px-lg-5 p-lg-2 mx-lg-5">
          <a
            className="navbar"
            style={{ color: "#706683", textDecoration: "none" }}
            href="#"
          >
            Cost Calculator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-lg-5">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: "#706683" }}
                >
                  Discover Stores
                </a>
              </li>
              <li className="nav-item px-lg-5">
                <a className="nav-link" href="#" style={{ color: "#706683" }}>
                  Track Orders
                </a>
              </li>
            </ul>
            <div
              className="d-flex gap-5"
              style={{
                alignItems: "center",
                color: "#706683",
              }}
            >
              <span className="navbar-text">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#706683" }}
                >
                  Need help? Call:{" "}
                  <span style={{ color: "#1da1f2" }}>+2342013306047</span>
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={whatsapp} alt="" />
                </a>
              </span>
              <span
                className="px-3 p-1"
                style={{ border: "1px solid gray", borderRadius: "50px" }}
              >
                <a
                  href="#"
                  className="d-flex gap-2"
                  style={{ textDecoration: "none" }}
                >
                  <img src={Naija} alt="" />
                  <p style={{ margin: "4px", color: "#706683" }}>Nigeria</p>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid" style={{ background: "#ece8d9" }}>
        <div className="row gap-sm-5 gap-lg-0 py-4 px-lg-5 mx-lg-4" id="hero">
          <div className="col-sm-12 col-md-2 col-lg-4 ">
            <img src={print} alt="" />
          </div>
          <div
            className="col-sm-12 col-md-9 col-lg-8"
            id="list"
            style={{ color: "#546275" }}
          >
            <p>All Products</p>
            <p>Become a Reseller</p>
            <p>Merch Store</p>
            <p>Marketplace</p>
            <p>Sign in</p>
            <p>Create Account</p>
            <img src={Cart} alt="" />
          </div>
        </div>
        <div className="container-fluid">
          <button className="btn btn bg-white px-4" id="menu">
            Menu
          </button>
        </div>
        <div className="container-fluid">
          <div className="row px-lg-5 mx-lg-4 py-5 mt-lg-3">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <h1
                className="qua"
                style={{ fontSize: "67.2px", fontWeight: "bold" }}
              >
                Quality Prints
              </h1>
              <p className="ship">Shipped to your doorstep</p>
              <p id="what">What would you like to print today</p>
              <div className="d-flex mb-3" id="seImg">
                <input
                  style={{ alignItems: "center" }}
                  type="text"
                  name=""
                  placeholder="Search for Business cards, T-shirts, Mugs, etc"
                  id="inp"
                />
                <img src={Search} className="ps-5" alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 img">
              <img src={printCard} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-lg-5 mx-lg-4 py-5" id="head">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex" id="headLine">
            <h3 id="pp">Popular Products</h3>
            <a href="#" className="sap">
              See All Products
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row px-lg-5 mx-lg-3 gap-3" id="row">
            <div className="col-sm-5 col-md-5 col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <div style={{ height: "40%", overflow: "hidden" }}>
                  <img src={card1} id="cImg" className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">Two-sided Business Cards</h5>
                    <p>STARTING AT</p>
                    <h5>₦15,100 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-4">
                    Browse Two-sided Bu...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">A5 fly3rs (Single Sided)</h5>
                    <p>STARTING AT</p>
                    <h5>₦25,800 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-5">
                    Browse A5 flyers (S...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-3 ">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">A5 flyers (Single Sided)</h5>
                    <p>STARTING AT</p>
                    <h5>₦25,800 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-5">
                    Browse A5 flyers (S...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-2">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">A5 flyers (Single Sided)</h5>
                    <p>STARTING AT</p>
                    <h5>₦25,800 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-5">
                    Browse A5 flyers (S...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4">
          <div className="row px-lg-5 mx-lg-3 gap-3" id="row">
            <div className="col-sm-5 col-md-5 col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">Two-sided Business Cards</h5>
                    <p>STARTING AT</p>
                    <h5>₦15,100 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-4">
                    Browse Two-sided Bu...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">A5 fly3rs (Single Sided)</h5>
                    <p>STARTING AT</p>
                    <h5>₦25,800 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-5">
                    Browse A5 flyers (S...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-3 ">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">A5 flyers (Single Sided)</h5>
                    <p>STARTING AT</p>
                    <h5>₦25,800 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-5">
                    Browse A5 flyers (S...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-2">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card1} id="cImg" className="card-img-top" alt="" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">A5 flyers (Single Sided)</h5>
                    <p>STARTING AT</p>
                    <h5>₦25,800 per 100</h5>
                  </a>

                  <a href="#" class="btn btn-primary p-2 px-5">
                    Browse A5 flyers (S...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-lg-5 mx-lg-4 gap-3" id="row">
          <div className="col-sm-5 col-md-5 col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={card1} id="cImg" className="card-img-top" alt="" />
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title">Two-sided Business Cards</h5>
                  <p>STARTING AT</p>
                  <h5>₦15,100 per 100</h5>
                </a>

                <a href="#" class="btn btn-primary p-2 px-4">
                  Browse Two-sided Bu...
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={card1} id="cImg" className="card-img-top" alt="" />
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title">A5 fly3rs (Single Sided)</h5>
                  <p>STARTING AT</p>
                  <h5>₦25,800 per 100</h5>
                </a>

                <a href="#" class="btn btn-primary p-2 px-5">
                  Browse A5 flyers (S...
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-3 ">
            <div className="card" style={{ width: "18rem" }}>
              <img src={card1} id="cImg" className="card-img-top" alt="" />
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title">A5 flyers (Single Sided)</h5>
                  <p>STARTING AT</p>
                  <h5>₦25,800 per 100</h5>
                </a>

                <a href="#" class="btn btn-primary p-2 px-5">
                  Browse A5 flyers (S...
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-2">
            <div className="card" style={{ width: "18rem" }}>
              <img src={card1} id="cImg" className="card-img-top" alt="" />
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title">A5 flyers (Single Sided)</h5>
                  <p>STARTING AT</p>
                  <h5>₦25,800 per 100</h5>
                </a>

                <a href="#" class="btn btn-primary p-2 px-5">
                  Browse A5 flyers (S...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-lg-5 mx-lg-4 pt-5 mt-3">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
            <h3 id="topy">Popular Categories</h3>
            <p>
              <a href="#" className="sap py-3">
                See All Categories
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="row gap-4 px-lg-5 mx-lg-4" id="row">
          <div className="col-sm-5 col-md-5 col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={card1} id="cImg" className="card-img-top" alt="" />
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title">Two-sided Business Cards</h5>
                  <p>STARTING AT</p>
                  <h5>₦15,100 per 100</h5>
                </a>

                <a href="#" class="btn btn-primary p-2 px-4">
                  Browse Two-sided Bu...
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={card1} id="cImg" className="card-img-top" alt="" />
              <div className="card-body">
                <a href="#">
                  <h5 className="card-title">A5 fly3rs (Single Sided)</h5>
                  <p>STARTING AT</p>
                  <h5>₦25,800 per 100</h5>
                </a>

                <a href="#" class="btn btn-primary p-2 px-5">
                  Browse A5 flyers (S...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 mt-5">
        <div className="row px-lg-5 mx-lg-4 ">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h2 id="naj">Nigeria’s No. 1 online print shop 👑</h2>
            <p className="par">
              Our print services and solutions are trusted by these brands and{" "}
              <br />
              over 15,000 other businesses in Nigeria.
            </p>
            <img src={logos} alt="" className="py-3 img-fluid" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid pt-5 my-5"
        style={{ background: "#edf6fd" }}
      >
        <div className="row px-lg-5 mx-lg-4">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="topy2">What Customers Say About Us 🙌🏾</h1>
          </div>
        </div>
        <div class="row px-lg-5 mx-lg-4">
          <div class="col-sm-12 col-lg-4 col-md-6 mb-3 mb-sm-4">
            <div class="card">
              <div class="card-body">
                <div className="d-flex gap-3">
                  <img src={bird} className="img-fluid" alt="" />
                  <p class="card-title">
                    Amina Ebele <span>@DeliciousAmina</span>
                  </p>
                </div>
                <p class="card-text">
                  I am now the unofficial <span>@Printivo</span> ambassador.
                  What these guys just pulled to ensure I got my menu cards
                  today is stunning!
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4 col-md-6 mb-3 mb-sm-4">
            <div class="card">
              <div class="card-body">
                <div className="d-flex gap-3">
                  <img src={bird} className="img-fluid" alt="" />
                  <p class="card-title">
                    Oluwatosin <span>@tosingirlfx</span>
                  </p>
                </div>
                <p class="card-text">
                  <span>@Printivo</span> delivered my mugs in 24hrs. Thank you
                  so much! It's nice doing business with you. More to come.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4 col-md-6 mb-3 mb-sm-4">
            <div class="card">
              <div class="card-body">
                <div className="d-flex gap-3">
                  <img src={bird} className="img-fluid" alt="" />
                  <p class="card-title">
                    Oluwatosin <span>@tosingirlfx</span>
                  </p>
                </div>
                <p class="card-text">
                  <span>@Printivo</span> delivered my mugs in 24hrs. Thank you
                  so much! It's nice doing business with you. More to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-lg-5 mx-lg-4">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 id="top1">You can count on us for:</h1>
          </div>
        </div>
        <div className="row pt-2 justify-content-between px-lg-5 mx-lg-4">
          <div className="col-sm-6 col-md-5 col-lg-3 mb-sm-5">
            <div className="d-flex">
              <img className="img-fluid" alt="" />
              <div>
                <h5 id="top">Fast Turnaround Within Days</h5>
                <p id="para">
                  Your order gets to you within 3-7 working days via DHL or our
                  very own Printivo Direct.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-5 col-lg-3 mb-sm-5">
            <div className="d-flex">
              <img className="img-fluid" alt="" />
              <div>
                <h5 id="top">100% Top Quality</h5>
                <p id="para">
                  Only the finest materials, machines and people will be
                  involved in fulfilling your order.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-md-5 col-lg-3 mb-sm-5">
            <div className="d-flex">
              <img className="img-fluid" alt="" />
              <div>
                <h5 id="top">Affordable Services</h5>
                <p id="para">
                  All products are adequately priced to ensure you get value for
                  your money at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5 py-5"
        style={{ background: "#f7f6f4" }}
      >
        <div className="row px-lg-5 mx-lg-4 pt-2 my-4">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 id="top1">Our amazing work got noticed by:</h1>
          </div>
        </div>
        <div className="row px-lg-5 mx-lg-4 d-flex gap-lg-5 pb-4">
          <div className="col-sm-5 col-md-4 col-lg-2">
            <img src={techCrunch} className="img-fluid" alt="" />
            <p className="pt-3">
              <a href="#" className="ali">
                Read the article here
              </a>
            </p>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-2">
            <img src={forbes} className="img-fluid" alt="" />
            <p className="pt-3">
              <a href="#" className="ali">
                Read the article here
              </a>
            </p>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-2">
            <img src={techPoint} className="img-fluid" alt="" />
            <p className="pt-3">
              <a href="#" className="ali">
                Read the article here
              </a>
            </p>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-2">
            <img src={techCabal} className="img-fluid" alt="" />
            <p className="pt-3">
              <a href="#" className="ali">
                Read the article here
              </a>
            </p>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-2">
            <img src={cnn} className="img-fluid" alt="" />
            <p className="pt-3">
              <a href="#" className="ali">
                Read the article here
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ background: "#384a62" }}>
        <div className="row mt-lg-4 px-lg-5 mx-lg-4">
          <div className="col-sm-12 col-md-5 col-lg-3 pb-sm-4">
            <h6 id="foot">Printivo</h6>
            <li className="pt-2 footP">About Us</li>
            <li className="footP">Contact</li>
            <li className="footP">Track Order</li>
            <li className="footP">Printivo Promise</li>
            <li className="footP">Printivo Blog</li>
            <li className="footP">Career</li>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-3 pb-sm-4">
            <h6 id="foot">Help and Information</h6>
            <li className="pt-2 footP">Paper Quality</li>
            <li className="footP">Privacy Policy</li>
            <li className="footP">Terms and Conditions</li>
            <li className="footP">Font Licenses</li>
            <li className="footP">Shipping and Delivery</li>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-3 pb-sm-4">
            <h6 id="foot">Make Money</h6>
            <li className="pt-2 footP">Refer a friend & earn N1,000</li>
            <li className="footP">Become a Reseller</li>
            <li className="footP">Sell your Designs</li>
            <li className="footP">Merch Store</li>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-3 pb-sm-4">
            <h6 id="foot">Follow Us</h6>
            <div className="d-flex gap-4 pb-4">
              <img src={fb} className="img-fluid" alt="" />
              <img src={twit} className="img-fluid" alt="" />
              <img src={lin} className="img-fluid" alt="" />
              <img src={ig} className="img-fluid" alt="" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-12">
              <h6 id="foot" className="mt-sm-4">
                Accepted Payments
              </h6>
              <img src={payment} className="img-fluid pb-4" alt="" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-12">
              <h6 id="foot" className="mt-sm-4">
                Delivery
              </h6>
              <img src={shipping} className="img-fluid mb-sm-5" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4" style={{ background: "#cbcac8" }}>
        <div className="row text-center pt-2">
          <div className="col-sm-12 col-md-12 col-lg-12" id="futSent">
            <p>Copyright © 2023 Printivo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
