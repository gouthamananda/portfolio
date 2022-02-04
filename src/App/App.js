import Router from '../Router'; 
import Header from '../Components/Header/Header';
import Drawer from '../Components/Drawer/Drawer';
import { useState } from 'react';
import svg from '../Assets/w1.svg';


function App() {

const [drawerOpen,setDrawerOpen]=useState(false);

const toggleDrawer = (value) => (event) => {
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }
  setDrawerOpen(value);
};

  return (
    <div
    style={{
      background:`url(${svg})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
    }}
    >
       
      <Header
      open={drawerOpen}
      toggleDrawer={toggleDrawer}
      />
      <Drawer
      open={drawerOpen}
      toggleDrawer={toggleDrawer}
      setDrawerOpen={setDrawerOpen}
      />
       <Router/> 
    
    </div>
       
  );
}

export default App;
