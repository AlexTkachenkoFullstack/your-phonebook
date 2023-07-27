import { useSelector } from 'react-redux';
import {
  BurgerContainer,
  Link,
  LinkContacts,
  LinkHome,
  LinkHomeAuth,
} from './Navigation.styled';
import { tokenSelector } from 'redux/auth/selectors';
import { HamburgerIcon } from './Navigation.styled';

const Navigation = () => {
  const auth = useSelector(tokenSelector);

  return (
    <>
      {auth && (
        <BurgerContainer className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <HamburgerIcon />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <Link className="dropdown-item" to="/">
              Home
            </Link>
            <Link className="dropdown-item" to="/contacts">
              Contacts
            </Link>
          </div>
        </BurgerContainer>
      )}
      <>
        {!auth && <LinkHome to="/">Home</LinkHome>}
        {auth && (
          <>
            <LinkHomeAuth to="/" style={{ marginRight: 25 }}>
              Home
            </LinkHomeAuth>
            <LinkContacts
              to="/contacts"
              style={{ marginRight: 'auto', scale: '1.1' }}
            >
              Contacts
            </LinkContacts>
          </>
        )}
      </>
    </>
  );
};

export default Navigation;
