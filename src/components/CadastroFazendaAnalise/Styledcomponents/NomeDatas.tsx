import styled from 'styled-components';

export const NomeDatas = styled.div`
  width: 100%;
  gap: 16px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
