import { useHistory } from "react-router";

import notFoundImage from "assets/images/not_found.svg";
import { 
  Container,
  Title,
  Subtitle,
  Message,
  Image,
  Button 
} from "./styles";

export function NotFoundPage() {

  const history = useHistory();

  return (
    <Container>
      <Image height="300" src={notFoundImage} alt="Not Found" />
      <Title>Error 404</Title>
      <Subtitle>Page not found.</Subtitle>
      <Message>The page you are looking for does not exist.</Message>
      <Button onClick={() => history.push("/")}>Back to inital page</Button>
    </Container>
  );
}