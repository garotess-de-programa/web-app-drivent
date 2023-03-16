import ActivityCard from './ActivityCard';
import { HallTitle, ActivityScheduleWrapper, HallTitleWrapper, HallSchedule, HallScheduleWrapper } from './style';

export default function ActivitiesSchedule(date) {
  //ActivitySchedule: usar o date para fazer um filter na tabela Activity
  // Title: activity.name
  // Time: activity.schedule.startTime(hh) e activity.schedule.endTime(hh)
  // div size: activity.schedule.endTime(hh)-activity.schedule.startTime(hh)
  //Capacity: hall.capacity - activity.seat.length     || if capacity = 0 'esgotado' e muda icone
  
  return (
    <ActivityScheduleWrapper> 

      <HallTitleWrapper>
        <HallTitle>Auditório Principal</HallTitle>
        <HallTitle>Auditório Lateral</HallTitle>
        <HallTitle>Sala de Workshop</HallTitle>
      </HallTitleWrapper>

      <HallScheduleWrapper>
        <HallSchedule>
          <ActivityCard />
        </HallSchedule>

        <HallSchedule>  
          <ActivityCard />
        </HallSchedule>

        <HallSchedule>
          <ActivityCard />
        </HallSchedule>
      </HallScheduleWrapper>

    </ActivityScheduleWrapper>

  );
}
