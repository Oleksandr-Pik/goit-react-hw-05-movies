import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled('header')`
  padding: 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 30px;
`;

const List = styled('ul')`
  display: flex;
  column-gap: 20px;
  list-style: none;
  font-size: 24px;
  font-weight: 600;
`;

const StyledLink = styled(NavLink)`
  color: #212121;
  text-decoration: none;

  &.active {
    color: orangered;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </List>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
