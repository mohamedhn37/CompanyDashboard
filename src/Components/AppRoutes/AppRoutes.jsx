import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashbaord/Dashboard';
import Profil from "../../Pages/Profil/Profil";
import Offre from '../../Pages/Offre/Offre';
import Postulation from '../../Pages/Postulation/Postulation';
import Setting from '../../Pages/Setting/Setting';


function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Profil" element={<Profil/>}></Route>
        <Route path="/Offre" element={<Offre/>}></Route>
        <Route path="/Postulation" element={<Postulation/>}></Route>
        <Route path="/Setting" element={<Setting/>}></Route>
      </Routes>
  );
}
export default AppRoutes;
