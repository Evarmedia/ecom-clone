import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import './index.css'
import Card from "./Components/Cards";
import { useState } from "react";

//DataBase
import products from './db/data'



function App() {
  //...... App State....
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //```````````input filter```````````
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  };

  // const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );
  const filteredItems = products.filter(
    (product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  
  //```````````Radio filter```````````
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  };

  //```````````button filter```````````
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  };
  console.log(handleClick)

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    //filtering input items//
    if (query){
      filteredProducts = filteredItems
    }

    //selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(
      ({category, color, company, newPrice, title}) => 
      category === selected || 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected
      );
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
      <Card 
      key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
    ));
  
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange= {handleChange} />
      <Navigation query = {query} handleInputChange = {handleInputChange}/>
      <Recommended handleClick ={handleClick}/>
      <Products result = {result}/>
      
      
    </>
  );
}

export default App;