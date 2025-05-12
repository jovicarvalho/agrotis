import styled from 'styled-components';

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

export const BackgroundVideo = styled.video<VideoProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  
`;
