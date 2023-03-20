import * as S from '../../../components/Typography';
import { useState } from 'react';
import useUserId from '../../../hooks/userUserId';
import useActivities from '../../../hooks/api/useActivities';
import useScheduleDays from '../../../hooks/api/useScheduleDays';
import useReserveAtivity from '../../../hooks/api/useReserveActivity';
import { Page } from '../../../components/Page/Page';
import DateButton from '../../../components/Activities/DateButton';
import { DateButtonsWrapper } from '../../../components/Activities/style';
import ActivitiesSchedule from '../../../components/Activities/ActivitiesSchedule';

export default function ActivitiesPage() {
  const { scheduleDays, scheduleDaysLoading, scheduleDaysError } = useScheduleDays();
  const { activities, activityAct } = useActivities();
  const { reserveActivityAct } = useReserveAtivity();
  const loadingOrError = scheduleDaysError || scheduleDaysLoading;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [reservedActivity, setReservedActivity] = useState(null);
  const userId = useUserId();

  if (scheduleDays) {
    scheduleDays.sort((a, b) => {
      return new Date(a.day) - new Date(b.day);
    });
  }

  if (loadingOrError) {
    return (
      <Page error={'true'} title="Escolha de atividades">
        {scheduleDaysLoading && 'Carregando...'}
        {scheduleDaysError && scheduleDaysError.message}
      </Page>
    );
  }

  async function handleDate(day) {
    await activityAct(day);
    setSelectedDate(day);
  }

  async function handleActivity(activityId) {
    setSelectedActivity(activityId);
    await reserveActivityAct({ activityId });
    setReservedActivity(activityId);
  }

  return (
    <Page error={false} title="Escolha de atividades">
      {!activities && <S.SubtitleTypography>Primeiro, filtre pelo dia do evento:</S.SubtitleTypography>}
      <DateButtonsWrapper>
        {scheduleDays?.map((date, index) => (
          <DateButton key={index} date={date} handleDate={handleDate} selected={selectedDate} />
        ))}
      </DateButtonsWrapper>
      {activities && (
        <ActivitiesSchedule activities={activities} selected={selectedActivity} handleActivity={handleActivity} reserved={reservedActivity} userId={userId}/>
      )}
    </Page>
  );
}
