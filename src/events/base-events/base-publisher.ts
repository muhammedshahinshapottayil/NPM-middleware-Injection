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
    return new Promise<void>(async (res, rej) => {
      const datas = await this.client.publish(
        this.subject,
        JSON.stringify(data),
        (reply: any, err?: Error) => {
          if (!err) return res(reply);
          return rej();
        }
      );
    });
  }
}
