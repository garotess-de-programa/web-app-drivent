import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  > h6 {
    width: 500px;
    text-align: center;
    color: #8e8e8e !important;
  }
  @media (max-width: 600px) {
    > h6 {
      width: 100%;
      padding: 20px !important;
    }
  }
`;
