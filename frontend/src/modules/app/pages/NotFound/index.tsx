import { useHistory } from "react-router";

import { 
  Container,
  Title,
  Subtitle,
  Button 
} from "./styles";

export function NotFoundPage() {

  const history = useHistory();

  function handleClickToBackInitialPageButton() {
    history.push("/");
    console.log(history);
  }

  return (
    <Container>
      <Title>Error 404</Title>
      <Subtitle>Page not Found</Subtitle>
      <Button onClick={handleClickToBackInitialPageButton}>Back to inital page</Button>
    </Container>
  );
}