import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Crypto from './Crypto';


function App() {
  const [ cryptos, setCryptos ] = useState([]);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${process.env.REACT_APP_CRYPTO_KEY}`)
    .then(res => {
      setCryptos(res.data);
      console.log(res.data);
      console.log(process.env);
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search a currency</h1>
        <form className="search-input">
          <input onChange={handleChange}className="crypto-input" type="text" placeholder="Search"/>
        </form>
      </div>
      {filteredCryptos.map(crypto => {
        return (
          <Crypto
          key={crypto.id}
          name={crypto.name}
          image={crypto.image} 
          symbol={crypto.symbol}
          marketCap={crypto.market_cap}
          price={crypto.current_price}    
          priceChange={crypto.price_change_percentage_24h}    
          volume={crypto.total_volume}         
          />
        )
      })}
    </div>
  );
}

export default App;
