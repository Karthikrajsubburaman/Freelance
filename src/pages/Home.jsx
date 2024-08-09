import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import Popular from '../components/Popular/Popular';
import VideoPage from '../components/VideoPage/VideoPage';
import ProPage from '../components/ProPage/ProPage';
import Testimonials from '../components/Testimonials/Testimonials';
import SamplePage from '../components/SamplePage/SamplePage';
import ConnectNow from '../components/ConnectNow/ConnectNow';
import AI from '../components/AI/AI';
import ChatBox from '../components/ChatBox/ChatBox';
import PortfolioShowcase from '../pages/PortfolioShowcase/PortfolioShowcase';  


const Home = () => {
  return (
    <div>
      <HomePage />
      <Popular />
      <VideoPage /> 
      <ProPage />
      <Testimonials />
      <SamplePage />
      <PortfolioShowcase />
      <AI />
      <ChatBox />
      <ConnectNow />
    </div>
  );
};

export default Home;
