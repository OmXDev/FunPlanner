import Topbar from '../components/shared/Topbar'
import { Outlet, useLocation } from 'react-router-dom';


const RootLayout = () => {
  const location = useLocation(); // Get current location

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Topbar only if the current path is not '/login' or '/register' */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Topbar />}
   
    <main className="flex-grow">
      <Outlet />
    </main>
    
  </div>
  );
};
export default RootLayout