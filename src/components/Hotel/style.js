import styled from 'styled-components';

export const HotelWrapper = styled.div`
  height: auto;
  max-height: 300px;

  width: 196px;

  border-radius: 12px;
  background-color: ${({ clicked }) => clicked ? '#FFEED2' : '#EBEBEB'};
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img, span {
    width: 168px;
    margin-top: 16px !important;
  }

  > img {
    border-radius: 8px;
    height: 110px;
  }

  :hover {
    background-color: ${({ clicked }) => clicked ? '#FFE7C0' : '#D7D7D7'};
  }
`;

export const HotelName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  width: 168px;
  font-weight: bold;
`;

export const Detail = styled(Subtitle)`
  margin-top: 4px;
  font-weight: normal;
`;
