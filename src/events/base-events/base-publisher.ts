import { Subjects } from "../subjects/Subjects";
interface Event {
  subject: Subjects;
  data: any;
}
export abstract class Publisher<T extends Event> {
  abstract subject: T["subject"];
  protected client;
  constructor(client: any) {
    this.client = client;
  }
  async publish(data: T["data"]): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.client.publish(this.subject, JSON.stringify(data));
      return res();
    });
  }
}
