import React from 'react';
import { Block, Logo, Nav, NavItem } from 'vcc-ui';

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Block extend={{ marginLeft: 10 }}>
          <Logo type="spreadmark" height={11} />
        </Block>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
