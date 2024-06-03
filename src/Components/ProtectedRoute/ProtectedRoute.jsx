import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ProtectedRoute = ({ element: Component }) => {
  const jwtToken = Cookies.get('token');

  if (!jwtToken) {
    return <Navigate to="/signup" />;
  }

  return (
    <div>
      <Navbar />
      <Component />
      <Footer />
    </div>
  );
};

export default ProtectedRoute;
