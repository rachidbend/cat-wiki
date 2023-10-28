import { Outlet, useNavigation } from 'react-router';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import styles from './AppLayout.module.css';
import Loader from './../loader/Loader';

export default function AppLayout() {
  // This component is presentational, to nor rerender the header and footer for no reason, because they are present in all pages

  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div className={`${styles.appLayout}`}>
      {navigation.state === 'loading' ? <Loader /> : null}
      <Header />
      <main>
        {/* The components rendered here depend on the current route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
