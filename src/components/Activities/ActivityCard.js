import {
  ActivityCardWrapper,
  IoEnterOutlineStyled,
  AiOutlineCloseCircleStyled,
  AiOutlineCheckCircleStyled,
  Time,
  Capacity,
  Title,
  ActivityInfoWrapper,
  CapacityWrapper,
} from './style';

export default function ActivityCard({ activity, selected, handleActivity, reserved }) {
  const seats = activity.Hall.capacity - activity.Seat.length;
  const [startDatePart, startTimePart] = activity.Schedule.startTime.split('T');
  const [startHour, startMinute] = startTimePart.split(':');
  const [endDatePart, endTimePart] = activity.Schedule.endTime.split('T');
  const [endHour, endMinute] = endTimePart.split(':');
  const eventTime = endHour - startHour;

  return (
    <ActivityCardWrapper
      eventTime={Number(eventTime)}
      onClick={() => handleActivity(activity.id)}
      clicked={selected === activity.id}
    >
      <ActivityInfoWrapper>
        <Title>{activity.name}</Title>
        <Time>
          {startHour}:{startMinute} - {endHour}:{endMinute}
        </Time>
      </ActivityInfoWrapper>

      {seats === 0 ? (
        <CapacityWrapper>
          <AiOutlineCloseCircleStyled />
          <Capacity full={seats === 0}>Esgotado</Capacity>
        </CapacityWrapper>
      ) : reserved ? (
        <CapacityWrapper>
          <AiOutlineCheckCircleStyled />
          <Capacity>Inscrito</Capacity>
        </CapacityWrapper>
      ) : (
        <CapacityWrapper>
          <IoEnterOutlineStyled />
          <Capacity>{seats} vagas</Capacity>
        </CapacityWrapper>
      )}
    </ActivityCardWrapper>
  );
}
