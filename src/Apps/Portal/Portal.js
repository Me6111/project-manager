import React, { useEffect, useRef } from 'react';
import './Portal.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import AppContent from './AppContent';



const Portal = () => {
  const ElementToRef = useRef(null); // Create a ref for the appContainer 

  useEffect(() => {


  }, []);

  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
      <AppContent />
    </div>
  );
};

export default Portal;