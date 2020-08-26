import { generateId } from "../utils.js";
console.log(0)
export default class House {
  // Object destructuring
  constructor({ price, bedroom, bathroom, img, description }) {
    console.log(2);
    this.id = generateId()
    this.price = price
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.img = img
    this.description = description
  }

get Template() {
  return `
  <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.price} - ${this.bedrooms} - ${this.bathrooms}</h4>
              <p class="card-text">${this.description}</p>
              // <div class="d-flex justify-content-between">
              //     <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
              //     <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
              //     <p>$${this.price.toFixed(2)}</p>
              // </div>
          </div>
      </div>
    </div>`
  `
}
}