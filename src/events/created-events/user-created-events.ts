import { Subjects } from "../subjects/Subjects";
export interface UsercreatedEvents {
  subject: Subjects.getDepartment;
  data: {
    department?: number;
  };
}
export interface UsercreatedEventsReply {
  subject: Subjects.getDepartmentReply;
  data: any;
}
