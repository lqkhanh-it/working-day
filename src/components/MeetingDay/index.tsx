import { Meeting } from "@prisma/client";
import { useEffect, useState } from "react";
export default ({
  meetings,
  onMeetingCount,
}: {
  meetings: Meeting[];
  onMeetingCount?: (num: number) => void;
}) => {
  const [meetingCount, setMeetingCount] = useState(0);

  useEffect(() => {
    if (onMeetingCount) onMeetingCount(meetingCount);
    return () => {
      setMeetingCount(0);
    };
  }, [meetingCount]);

  useEffect(() => {
    if (Array.isArray(meetings)) {
      let latestDay = 0;
      const total = meetings.reduce((acc, curr) => {
        const { start_day, end_day } = curr;
        if (start_day < latestDay) {
          const dif = end_day - latestDay;
          latestDay = end_day;
          return acc + dif;
        }
        latestDay = end_day;
        return acc + (end_day - start_day + 1);
      }, 0);
      setMeetingCount(total);
    }
  }, [meetings]);

  return (
    <div className="flex gap-2">
      {meetings.map((meeting) => {
        const { start_day, end_day } = meeting;
        return (
          <div className="badge badge-info badge-sm">
            {start_day}-{end_day}
          </div>
        );
      })}
    </div>
  );
};
