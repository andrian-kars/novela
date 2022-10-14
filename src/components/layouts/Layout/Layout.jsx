import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
