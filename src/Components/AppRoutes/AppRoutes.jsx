import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashbaord/Dashboard';
import Profil from "../../Pages/Profil/Profil";
import CondidatureGestion from '../../Pages/CondidatureGestion/CondidatureGestion';
import Setting from '../../Pages/Setting/Setting';
import Offre from '../../Pages/Offre/Offre';

function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Profil" element={<Profil/>}></Route>
        <Route path="/Offre" element={<Offre/>}></Route>
        <Route path="/CondidatureGestion" element={<CondidatureGestion/>}></Route>
        <Route path="/Setting" element={<Setting/>}></Route>
      </Routes>
  );
}
export default AppRoutes;
