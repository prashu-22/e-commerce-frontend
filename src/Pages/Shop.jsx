import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero'

const Shop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get('token');
    if (!jwtToken) {
      navigate('/signup');
    }
  }, [navigate]);

  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
