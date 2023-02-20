import Image from 'next/image';
import React from 'react';
import { Block, Link, Nav, NavItem } from 'vcc-ui';

const Navbar = () => {
  return (
    <Nav>
      <div data-test-name="main-navbar">
        <NavItem>
          <Block extend={{ marginLeft: 12 }}>
            <Link href="/">
              <Image
                src="/images/volvo-wordmark-black.svg"
                alt="volvo logo"
                width={140}
                height={11}
              />
            </Link>
          </Block>
        </NavItem>
      </div>
    </Nav>
  );
};

export default Navbar;
