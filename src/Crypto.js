import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Crypto.css'

const Crypto = ({ name, price, symbol, volume, image, priceChange, marketCap }) => {
    // const priceChanges = priceChange.toFixed(2);
    
    return (
        <>
        <Container>
        <Row xs={2} md={4} lg={6}>
            
            <Col xs={12} md={12} lg={12}>
            <div className="crypto-container">

            <div className="crypto-row">
                <div className="crypto">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="crypto-symbol">{symbol}</p>                    
                </div>                

                <div className="crypto-data">

                <p className="crypto-price">${price}</p>
                
                <p className="crypto-volume">${volume.toLocaleString()}</p>
                
                {priceChange < 0 ? (
                    <p className="crypto-percent red"> {priceChange.toFixed(2)}%</p>
                ) : (
                    <p className="crypto-percent green"> {priceChange.toFixed(2)}%</p>
                )}


                <p className="coin-marketcap">
                    Mkt Cap: ${marketCap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
        </Col>        
        </Row>      
        </Container>
        </>
    );
};

export default Crypto;