import { Outlet } from 'react-router-dom';
import Footer from './common/Footer';
import Latest from './common/Latest';

const SharedLayout = () => {
  return (
    <main className="container">
      <Latest />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default SharedLayout;
