/** 1. Get the section, or container, from guitars.html, where all the guitar cards are going
 *  2. Loop through the products array from guitars.js to get all guitar__cards
 *  3. Use innerHTML to create elements and css for guitar__card and
 *      ${products[i].keyName} to get object values from guitars.js
 *  4. '?id=${products[i].id' is the query string to get the id from the url
 *      and will route you to the details page for the individual product */

const guitarsList = document.querySelector(".products-list");

for(let i=0; i < products.length; i++) {
    let productLink = `<a href="product.html?id=${products[i].id}" class="cta cta-small">View</a>`;
    if(products[i].sales === true) {
        productLink = `<a href="product.html?id=${products[i].id}" class="cta cta-small cta-sale">Sale</a>`;
    }
    guitarsList.innerHTML +=
        ` <article class="guitar__card">
                <img
                  src="${products[i].image}"
                  alt="${products[i].name}"
                />
                <h2>${products[i].name}</h2>
                <p>$${products[i].price}</p>
                ${productLink}
           </article>
        `
    ;
}
