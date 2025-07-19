import React from 'react';
import '../portfolio.css';

export default function StockPriceForecast() {
  return (
    <div className="project-details-card" style={{maxWidth: 700, margin: '2rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', background: '#fff'}}>
      <h2>Stock Price Forecast 📈💹</h2>
      <p>
        Forecasts stock prices using time series models and financial data. Compares ARIMA, LSTM, and other approaches.
      </p>
      <ul>
        <li><strong>Data:</strong> Historical stock prices</li>
        <li><strong>Tech:</strong> Python, Pandas, ARIMA, LSTM</li>
        <li><strong>Key Results:</strong> Forecast accuracy, model comparison</li>
      </ul>
      <a href="https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/stock-price-forecast" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
    </div>
  );
}
