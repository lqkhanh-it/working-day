import { Meeting } from "@prisma/client";

export type DisplayWorkingTime = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  meeting: Meeting[];
  days_without_meetings: number;
  days: number;
};
