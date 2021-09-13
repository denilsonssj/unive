import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 7.2rem;
  font-weight: 700;
  margin: 2.0rem 0;
`;

export const Subtitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 3.6rem;
  font-weight: 500;
  margin-bottom: 2.0rem;
`;

export const Message = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 2.0rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  font-size: 1.4rem;
`;