import { DisplayWorkingTime } from "@/app/type";
import Gender from "../Gender";
import MeetingDay from "../MeetingDay";
import { useEffect, useState } from "react";

const TableRow = ({ working }: { working: DisplayWorkingTime }) => {
  const { first_name, id, last_name, gender, email, days } = working;
  const [workingDayCount, setWorkingDayCount] = useState(0);
  const [notMeetingDayCount, setNotMeetingDayCount] = useState(0);

  useEffect(() => {
    if (workingDayCount && working?.days) {
      setNotMeetingDayCount(working.days - workingDayCount);
    }
    // return () => {
    //   setNotMeetingDayCount(0);
    //   setWorkingDayCount(0);
    // }
  }, [workingDayCount, working]);

  return (
    <tr>
      <td>
        <div className="font-bold">{id}</div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">
              {first_name}, {last_name}
            </div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        <Gender gender={gender} />
      </td>
      <th>{days}</th>
      <th>
        <MeetingDay
          meetings={working.meeting}
          onMeetingCount={(num) => setWorkingDayCount(num)}
        />
      </th>
      <th>{notMeetingDayCount}</th>
    </tr>
  );
};

export default TableRow;
