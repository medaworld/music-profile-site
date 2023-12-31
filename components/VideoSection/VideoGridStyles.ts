import { styled } from 'styled-components';

export const VideoGridContainer = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1500px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio
`;

export const MoreVideosButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 40px 0 0 0;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
