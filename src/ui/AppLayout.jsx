import { Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <div>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
