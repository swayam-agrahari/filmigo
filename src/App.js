import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Slider from './slider';
import MovieDetail from './MovieDetail';
import moviesData from './data/moviesData'; // Import your movie data
import Header from './header';
import VideoComponent from './video';
import Booking from './booking.js'; // Import the Booking component
import Payment from './payment.js'; // Import the Payment component

const App = () => {
  const videoData = {
    videoUrl: 'video/video.mp4', // Replace with your video URL
  };

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <VideoComponent videoUrl={videoData.videoUrl} />
            <Slider title="Top Choices" movies={moviesData.topChoices} />
            <Slider title="Classic" movies={moviesData.classic} />
            <Slider title="Trending" movies={moviesData.trending} />
          </>
        } />
        <Route path="/movie/:title" element={<MovieDetail moviesData={moviesData} />} />
        <Route path="/booking" element={<Booking />} /> {/* Add the booking route */}
        <Route path="/payment" element={<Payment />} /> {/* Add the payment route */}
      </Routes>
    </Router>
  );
};

export default App;
