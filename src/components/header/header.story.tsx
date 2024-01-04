import { AppHeader as Header } from './header';

export default {
  title: 'Header',
};

export const LoggedIn = () => (
  <Header
    navbarOpened={false}
    toggleNavbar={() => null}
    session
    signIn={() => {
      // eslint-disable-next-line no-alert
      alert('sign in');
    }}
    signOut={() => {
      // eslint-disable-next-line no-alert
      alert('sign out');
    }}
  />
);

export const LoggedOut = () => (
  <Header
    navbarOpened={false}
    toggleNavbar={() => null}
    session={false}
    signIn={() => {
      // eslint-disable-next-line no-alert
      alert('sign in');
    }}
    signOut={() => {
      // eslint-disable-next-line no-alert
      alert('sign out');
    }}
  />
);
