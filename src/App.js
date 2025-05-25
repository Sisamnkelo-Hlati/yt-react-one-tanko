import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Depots from "./Pages/Depots";
import RBMs from "./Pages/RBMs";
import ROMs from "./Pages/ROMs";
import TSOs from "./Pages/TSOs";
import GBS from "./Pages/GBS";
import Settings from "./Pages/Settings";
import Sites from "./Pages/Sites";
import Other from "./Pages/Other";
import Messages from "./Pages/Messages";
import Analytics from "./Pages/Analytics";
import Reports from "./Pages/Reports";
import Help from "./Pages/Help";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/rbms" element= {<RBMs/>}/>
      <Route path= "/depots" element= {<Depots/>}/>
      <Route path= "/roms" element= {<ROMs/>}/>
      <Route path= "/tsos" element= {<TSOs/>}/>
      <Route path= "/sites" element= {<Sites/>}/>
      <Route path= "/profile" element= {<Profile/>}/>
      <Route path= "/gbs-team" element= {<GBS/>}/>
      <Route path= "/settings" element= {<Settings/>}/>
      <Route path= "/other" element= {<Other/>}/>
      <Route path= "/messages" element= {<Messages/>}/>
     <Route path= "/analytics" element= {<Analytics/>}/>
      <Route path= "/reports" element= {<Reports/>}/>
      <Route path= "/help" element= {<Help/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;

