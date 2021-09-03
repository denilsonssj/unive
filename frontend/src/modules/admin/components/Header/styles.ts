import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.whiteColor };
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Navigation = styled.div``;

export const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const UserDetailsInfo = styled.div`
`;

export const UserDetailsName = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const UserDetailsRole = styled.span`
    color: #0A043C;
    font-size: 1.2rem;
    font-weight: 400;
`;