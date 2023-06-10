import nats, { Stan } from "node-nats-streaming";
import { Subjects } from "../subjects/Subjects";
interface Event {
  subject: Subjects;
  data: any;
}
export abstract class Publisher<T extends Event> {
  abstract subject: T["subject"];
  protected client: Stan;
  constructor(client: Stan) {
    this.client = client;
  }
  async publish(data: T["data"]): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (!err) return res();

        return rej();
      });
    });
  }
}
