import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

import { useMediaQuery } from "shared/utils/useMediaQuery";

interface ISidebarProps {
  isOpen: boolean;
};

export const SidebarContent = styled.div<ISidebarProps>`
  display: ${({ isOpen }) => isOpen && useMediaQuery("(min-width: 800px)") ? "flex" : "none" };
  flex-direction: column;
  width: 260px;
  background-color: ${({ theme }) => theme.colors.headlineColor };
  height: 100vh;
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  width: 260px;
  align-items: flex-end;
  justify-content: center;
`;

export const SidebarHeaderLogo = styled.div`
  display: inherit;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const SidebarHeaderIcon = styled.img`
`;

export const Span = styled.span`
  font-size: 3.8rem;
  color: ${({ theme }) => theme.colors.lightPurpleColor };
  font-weight: 700;
  margin-left: 0px;
`;

export const SidebarBody = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Image = styled.img`
  height: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 16px;
  margin: 20px 10px;
  align-items: center;
`;

export const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.lightPurpleColor };
  text-decoration: none;
  margin-left: -0.6rem;
`;