// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js


// src/Apps/Levels/Levels.js




// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js

import React from 'react';

import { Provider } from 'react-redux';
import store from '../../REDUXstore/REDUXstore.js';

import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import AppDescription from '../../components/AppDescription/AppDescription';


import LevelsSlider from './LevelsSlider/LevelsSlider';
import LevelInfoField from './LevelInfoField/LevelInfoField';

import './appContainer_Levels.css';

const Levels = () => {
  return (
    <Provider store={store}>
      <div id="appContainer_Levels">
        <MainMenuSet />
        <div className="AppContent">
          <AppDescription />
          <div className="LevelsSlider">
            <LevelsSlider />
          </div>
          <LevelInfoField />
        </div>
      </div>
    </Provider>
  );
};

export default Levels;