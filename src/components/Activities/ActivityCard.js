import { ActivityCardWrapper, IoEnterOutlineStyled, AiOutlineCloseCircleStyled, Time, Capacity, Title, ActivityInfoWrapper, CapacityWrapper  } from './style';

export default function ActivityCard({ activity }) {
  const seats = activity.Hall.capacity - activity.Seat.length;
  const [startDatePart, startTimePart] = activity.Schedule.startTime.split('T');
  const [startHour, startMinute, ] = startTimePart.split(':');
  const [endDatePart, endTimePart] = activity.Schedule.endTime.split('T');
  const [endHour, endMinute, ] = endTimePart.split(':');
  const eventTime = endHour - startHour;

  console.log('tempo da atividade',  typeof eventTime);

  return(
    <ActivityCardWrapper eventTime={Number(eventTime)}>

      <ActivityInfoWrapper>
        <Title>{activity.name}</Title>
        <Time>{startHour}:{startMinute} - {endHour}:{endMinute}</Time>
      </ActivityInfoWrapper>
     
      {seats === 0 ? (<CapacityWrapper> <AiOutlineCloseCircleStyled/>
        <Capacity full={seats===0}>Esgotado</Capacity>       </CapacityWrapper>):(      <CapacityWrapper> <IoEnterOutlineStyled/>
        <Capacity>{seats} vagas</Capacity>       </CapacityWrapper>)}

    </ActivityCardWrapper>
  );
}

