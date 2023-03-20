import * as S from './style';

export default function ActivityCard({ activity, selected, handleActivity, reserved, userId }) {
  const { startHour, endHour, startMinute, endMinute, eventTime } = useTime(activity);
  const seats = activity.Hall.capacity - activity.Seat.length;
  const userSeat = activity.Seat.filter((s) => s.userId === userId);

  const notHaveAvailableSeats = seats === 0;
  const userAlreadySubscribed = !reserved && userSeat.length > 0;
  const canSubscribe = reserved;
  console.log({ reserved });

  return (
    <S.ActivityCardWrapper
      eventTime={Number(eventTime)}
      onClick={() => handleActivity(activity.id)}
      clicked={selected === activity.id}
      reserved={reserved}
      userSeat={userSeat.length}
    >
      <S.ActivityInfoWrapper>
        <S.Title>{activity.name}</S.Title>
        <S.Time>
          {startHour}:{startMinute} - {endHour}:{endMinute}
        </S.Time>
      </S.ActivityInfoWrapper>

      <S.CapacityWrapper>
        {notHaveAvailableSeats && (
          <>
            <S.AiOutlineCloseCircleStyled />
            <S.Capacity full={notHaveAvailableSeats}>Esgotado</S.Capacity>
          </>
        )}
        {userAlreadySubscribed && (
          <>
            <S.AiOutlineCheckCircleStyled />
            <S.Capacity>Inscrito</S.Capacity>
          </>
        )}
        {canSubscribe && (
          <>
            <S.IoEnterOutlineStyled />
            <S.Capacity>{seats} vagas</S.Capacity>
          </>
        )}
      </S.CapacityWrapper>
    </S.ActivityCardWrapper>
  );
}

function useTime(activity) {
  const [, startTimePart] = activity.Schedule.startTime.split('T');
  const [startHour, startMinute] = startTimePart.split(':');
  const [, endTimePart] = activity.Schedule.endTime.split('T');
  const [endHour, endMinute] = endTimePart.split(':');
  const eventTime = endHour - startHour;

  return {
    startHour,
    endHour,
    startMinute,
    endMinute,
    eventTime,
  };
}
