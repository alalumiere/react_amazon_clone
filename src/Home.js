import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12313545"
            title="Untamed"
            price={27.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51m7MVU4OWL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="58237468"
            title="Mixing Bowls - set of 6 - stainless steel - Set Includes ¾, 2, 3.5, 5, 6, 8 Quart - Ideal For Cooking & Serving 🥣 - Easy to clean 🧼 - Great gift 🎁"
            price={21.99}
            image="https://images-na.ssl-images-amazon.com/images/I/718FplNfHWL._AC_SX522_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="96722584"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={2149.99}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825197207"
            rating={4}
          />
          <Product
            id="55931476"
            title="Powerbeats Pro Wireless Earphones - Moss"
            price={249.95}
            image="https://images-na.ssl-images-amazon.com/images/I/510tKsiw69L._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="45993347"
            title="The Mavic Air 2 Camera Drone"
            price={799.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61H6sByGqbL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="23492172"
            title="SAMSUNG 75-inch Class QLED Q90T Series - 4K UHD Direct Full Array 16X Quantum HDR 16X Smart TV with Alexa Built-in (QN75Q90TAFXZA, 2020 Model)"
            price={2997.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61pzhWiGSbL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
