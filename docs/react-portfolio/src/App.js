import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './portfolio.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AmazonStarsVsSentiment from './components/AmazonStarsVsSentiment';
import AirbnbPricePredictor from './components/AirbnbPricePredictor';
import DiseaseDiagnosisSymptoms from './components/DiseaseDiagnosisSymptoms';
import FemaFloodClaims from './components/FemaFloodClaims';
import MovieReviewSentiment from './components/MovieReviewSentiment';
import NycTaxiDuration from './components/NycTaxiDuration';
import RealEstateCovidWfh from './components/RealEstateCovidWfh';
import StockPriceForecast from './components/StockPriceForecast';
import TrafficAccidentHotspots from './components/TrafficAccidentHotspots';
import WeatherDataViz from './components/WeatherDataViz';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<><Hero /><Projects /></>} />
          <Route path="/about" element={<div>About page coming soon.</div>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/amazon-stars-vs-sentiment" element={<AmazonStarsVsSentiment />} />
        <Route path="/projects/airbnb-price-predictor" element={<AirbnbPricePredictor />} />
        <Route path="/projects/disease-diagnosis-symptoms" element={<DiseaseDiagnosisSymptoms />} />
        <Route path="/projects/fema-flood-claims" element={<FemaFloodClaims />} />
        <Route path="/projects/movie-review-sentiment" element={<MovieReviewSentiment />} />
        <Route path="/projects/nyc-taxi-duration" element={<NycTaxiDuration />} />
        <Route path="/projects/real-estate-covid-wfh" element={<RealEstateCovidWfh />} />
        <Route path="/projects/stock-price-forecast" element={<StockPriceForecast />} />
        <Route path="/projects/traffic-accident-hotspots" element={<TrafficAccidentHotspots />} />
        <Route path="/projects/weather-data-viz" element={<WeatherDataViz />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes for individual projects as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
