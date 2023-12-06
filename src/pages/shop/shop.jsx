import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { fetchData, getFetchedData } from '../../api';
const apiUrl = 'https://api.airtable.com/v0/appkLqkZxEbuK90ey/tblook3NsyXXuXVPb';
const apiKey = 'patMv61QM0Fibr4G8.16fb6beab75bbe1383134d2f050d600a30772a0c8a23326c2b47a1a30311b2c6';
let shop_items;



export const Shop = () => {


    return (
    <div className="shop">
      <div className="shopTitle">
        <h1>MorrisTech Shop</h1>
      </div>

      <div className="products">
        {



            PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
