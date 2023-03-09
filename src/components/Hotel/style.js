import styled from 'styled-components';

export const HotelWrapper = styled.div`
  height: auto;
  max-height: 300px;

  width: 196px;

  border-radius: 12px;
  background-color: ${({ clicked }) => (clicked ? '#FFEED2' : '#EBEBEB')};
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img,
  span {
    width: 168px;
    margin-top: 16px !important;
  }

  > img {
    border-radius: 8px;
    height: 110px;
  }

  :hover {
    background-color: ${({ clicked }) => (clicked ? '#FFE7C0' : '#D7D7D7')};
  }
`;

export const HotelName = styled.span`
  font-size: 20px;
  color: #343434;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  width: 168px;
  color: #3c3c3c;
`;

export const Detail = styled(Subtitle)`
  margin-top: 4px;
  font-weight: normal;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;
