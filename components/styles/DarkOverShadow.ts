import { styled } from 'styled-components';

export const DarkOverShadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.dark};
  opacity: 0.6;
`;