import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            price={199.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX466_.jpg"
          />
          <Product
            title="Nintendo Switch Sports - Nintendo Switch"
            price={29.36}
            rating={4}
            image="https://m.media-amazon.com/images/I/61WA1YOg4lL._SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={299.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/61tE7IcuLmL._SX522_.jpg"
          />
          <Product
            title="Cosonsen Women's Dress Deep V-Neck Long Sleeve Waist Tie Ruffle Mini Swing Skater Dresses"
            price={37.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51YGdPjQZCL._AC_UX466_.jpg"
          />
          <Product
            title="Mevlzz Men's Running Shoes Air Low Top Shoes for Men Basketball Sneakers Fashion Tennis Sport Fitness Cross Trainers"
            price={29.91}
            rating={4}
            image="https://m.media-amazon.com/images/I/71dv+0QYKyL._AC_UY575_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Z-Edge U24C 24-inch Curved Gaming Monitor, Full HD 1080P 1920x1080 LED Backlight Monitor, with 75Hz Refresh Rate and Eye-Care Technology, 178° Wide View Angle, Built-in Speakers, VGA+HDMI"
            price={169.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81dqkYh5JSL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
