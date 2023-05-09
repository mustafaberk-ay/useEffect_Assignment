import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ProductList from './components/product/ProductList';
import SearchForm from './components/searchform/SearchForm';
import CountryList from './components/country/CountryList';

function App() {
  const url = "https://fakestoreapi.com/products"
  const [data, setData] = useState([])
  const [userInput, setUserInput] = useState("")
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })

    axios.get("https://restcountries.com/v3.1/all").then((response) => console.log(response.data, 'response')).then((data) => setCountryData(data))
    console.log(countryData, 'countryList')
  }, [])

  const productList = data.filter((productItem) => productItem.title.toLowerCase().includes(userInput.toLowerCase()))

  if(data.length === 0){
    return (<div>Loading...</div>)
  }
  else{
    return (
      <div className="App">
        <h1>ProductList HW1</h1>
        <SearchForm setUserInput={setUserInput}/>
        <ProductList productList={productList}/>
        <h1>CountryList HW2</h1>
        <CountryList />
      </div>
    );
  }
}

export default App;
