import styled from 'styled-components';

import { IoEnterOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai'; 

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 37px;
  background-color: ${({ clicked }) => (clicked ? '#FFD37D' : '#E0E0E0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 16px;
  margin-bottom:5px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

export const DateButtonsWrapper = styled.div`
  display:flex;
  margin-bottom: 65px;
  flex-wrap: wrap;
`;

export const ActivityScheduleWrapper = styled.div`
//display: flex;
//flex-wrap: wrap;
border: 10px;
//border-color: #D7D7D7;
border-color: red;
`;

export const ActivityCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 265px;
  height: 79px;
  padding: 0px 10px;
  background: #e0e0e0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.20);
  border-radius: 4px;
  margin-bottom:5px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

export const IoEnterOutlineStyled = styled(IoEnterOutline)`
  color: green;
  font-size: 22px;
`;

export const AiOutlineCloseCircleStyled = styled(AiOutlineCloseCircle)`
  color: red;
  font-size: 22px;
`;

export const HallTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #7b7b7b;
`;

export const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
`;

export const Time = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
`;

export const Capacity = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 10px;
  color: #078632;
`;

export const HallSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 288px;
  height: 392px;
  border: 1px solid #d7d7d7;
`;

export const HallTitleWrapper = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 7px;
`;

export const HallScheduleWrapper = styled.div`
  display:flex;
  flex-direction: wrap;
`;

export const ActivityInfoWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction:column;
  align-items:flex-start;
  justify-content: flex-start;
`;

export const CapacityWrapper = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #cfcfcf;
`;