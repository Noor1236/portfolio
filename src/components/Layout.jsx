import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <div className="w-full min-h-screen flex flex-col 
          bg-gradient-to-r from-rose-50 to-white 
          dark:bg-gradient-to-r dark:from-gray-950 dark:to-gray-950 
          text-gray-900 dark:text-white">

          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className="flex-grow">
            <Outlet /> {/* or your route component */}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
