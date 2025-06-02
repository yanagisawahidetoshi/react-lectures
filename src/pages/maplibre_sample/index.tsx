/* eslint-disable prettier/prettier */
import React from 'react';
import { MapComponent } from './components/MapComponent';
import { TopBar } from './components/TopBar';
import ExampleComponent from './components/ExampleComponent';
import { MapProvider } from './context/MapContextProvider';

export const MapLibreSamplePage: React.FC = () => {
  return (
    <MapProvider backgroundMapStyle="pale">
      <div style={{ height: '100vh', width: '100vw' }}>
        <TopBar>
          <ExampleComponent />
        </TopBar>
        <MapComponent hideCenterIcon={false} />
      </div>
    </MapProvider>
  );
};
