import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <BrowserRouter>
      <SHeader>
        <SLink to="/">HOME</SLink>
        <SLink to="/users">USERS</SLink>
      </SHeader>
    </BrowserRouter>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
