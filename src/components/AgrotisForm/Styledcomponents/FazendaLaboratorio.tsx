import styled from 'styled-components';

export const FazendaLaboratorio = styled.div`
  margin-top:
  width: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
