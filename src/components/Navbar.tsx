import React from 'react';
import { Block, Link, Logo, Nav, NavItem } from 'vcc-ui';

const Navbar = () => {
  return (
    <Nav>
      <div data-test-name="main-navbar">
        <NavItem>
          <Block extend={{ marginLeft: 12 }}>
            <Link href="/">
              <Logo type="spreadmark" height={11} />
            </Link>
          </Block>
        </NavItem>
      </div>
    </Nav>
  );
};

export default Navbar;
