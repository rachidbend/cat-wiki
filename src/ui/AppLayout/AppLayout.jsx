import { lazy } from 'react';
import { Outlet, useNavigation } from 'react-router';
import styles from './AppLayout.module.css';

const Header = lazy(() => import('./../header/Header'));
const Footer = lazy(() => import('./../footer/Footer'));
const Loader = lazy(() => import('./../loader/Loader'));

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
