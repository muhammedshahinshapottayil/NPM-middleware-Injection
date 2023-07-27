import { Subjects } from "../subjects/Subjects";
export interface UserCreatedChatEvents {
  subject: Subjects.saveToChat;
  data: any;
}
