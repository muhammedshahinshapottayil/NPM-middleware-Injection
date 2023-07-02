import { Subjects } from "../subjects/Subjects";
export interface UsercreatedEvents {
  subject: Subjects.getDepartment;
  data: {
    department?: number;
  };
}

