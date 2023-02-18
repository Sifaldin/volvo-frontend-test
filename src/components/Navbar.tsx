import React from 'react';
import { Block, Link, Logo, Nav, NavItem } from 'vcc-ui';

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Block extend={{ marginLeft: 12 }}>
          <Link href="/">
            <Logo type="spreadmark" height={11} />
          </Link>
        </Block>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
