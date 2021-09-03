import {
  Container,
  Navigation,
  Icon,
  UserDetails,
  Avatar,
  UserDetailsInfo,
  UserDetailsName,
  UserDetailsRole
} from "./styles";

import menuIcon from "assets/icons/menu.svg";

interface IHeaderProps {
  handleClickButtonMenu: () => void;
};

export function Header({ handleClickButtonMenu }: IHeaderProps) {
  return (
    <Container>
      <Navigation>
        <Icon 
          src={menuIcon} 
          alt="menu" 
          onClick={handleClickButtonMenu}
        />
      </Navigation>
      <UserDetails>
        <Avatar 
          src="https://randomuser.me/api/portraits/women/51.jpg"
          alt="Mia V"
        />
        <UserDetailsInfo>
          <UserDetailsName>Mia V</UserDetailsName>
          <UserDetailsRole>Student</UserDetailsRole>
        </UserDetailsInfo>
      </UserDetails>
    </Container>
  );
}
