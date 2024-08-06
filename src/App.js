import React from 'react';
import Footer from './componet/Footer';
import './App.css';
import BreakingNews from './componet/BreakingNews';
import Container from './componet/Container';
import Cards from './componet/Cards';
import HeadingOfContent from './componet/HeadingOfContent';
import FeatureCards from './componet/FeatureCards';
import ExpolerContainer from './componet/ExpolerContainer';
import ActivitieCards from './componet/ActivitieCards';
import GirlsScoutCaurosal from './componet/GirlsScoutCaurosal';
import CarouselWithCards from './componet/CarouselWithCards';
const App = () => {
  return (
    <>
      <BreakingNews />
      <Container />
      <Cards />
      <HeadingOfContent />
      <FeatureCards />
      <ExpolerContainer />
      <ActivitieCards />
      <GirlsScoutCaurosal />
      <CarouselWithCards />
      <Footer />
    </>
  );
};
export default App;
