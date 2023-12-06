import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {fetchData, getFetchedData} from "./api";
import { PRODUCTS } from "./products";
import product6 from "./assets/products/6.webp";
///




const apiUrl = 'https://api.airtable.com/v0/appkLqkZxEbuK90ey/tblook3NsyXXuXVPb?sort[0][field]=number&sort[0][direction]=asc';
const apiKey = 'patMv61QM0Fibr4G8.16fb6beab75bbe1383134d2f050d600a30772a0c8a23326c2b47a1a30311b2c6';



fetchData(apiUrl, apiKey)
    .then(() => {
        // Call the function to get the fetched data


        const data = getFetchedData();
        PRODUCTS.slice(0,PRODUCTS.length)

        for (let x= 0; x<data.records.length; x++){
            PRODUCTS.push({

                id: data.records[x].fields.number,
                productName: data.records[x].fields.item_name,
                price: data.records[x].fields.price,
                productImage: data.records[x].fields.photo[0].url,
            })
            // PRODUCTS[x].productName = data.records[x].fields.item_name;
            // PRODUCTS[x].price = data.records[x].fields.price;
            // PRODUCTS[x].productImage = data.records[x].fields.photo[0].url;
            // PRODUCTS[x].id = data.records[x].fields.number;

        }








        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );

        // const value = data.someProperty;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    })

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
