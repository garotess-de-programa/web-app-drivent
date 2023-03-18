import { ActivityScheduleWrapper, HallTitle, HallSchedule } from './style';
import ActivityCard from './ActivityCard';

export default function ActivitiesSchedule({ activities, selected, handleActivity }) {
  const groupByHalls = {};
  activities.forEach((activity) => {
    if (groupByHalls[activity.Hall.name]) {
      const oldValues = groupByHalls[activity.Hall.name];
      groupByHalls[activity.Hall.name] = [...oldValues, activity];
    } else {
      groupByHalls[activity.Hall.name] = [activity];
    }
  });

  return (
    <ActivityScheduleWrapper>
      {Object.keys(groupByHalls).map((hallName) => (
        <div key={hallName}>
          <HallTitle>{hallName}</HallTitle>
          <HallSchedule>
            {groupByHalls[hallName].map((activity) => (
              <ActivityCard key={activity.id} activity={activity} selected={selected} handleActivity={handleActivity} />
            ))}
          </HallSchedule>
        </div>
      ))}
    </ActivityScheduleWrapper>
  );
}
