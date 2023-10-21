import { Outlet } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
