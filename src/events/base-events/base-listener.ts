import { Msg, Subscription } from "nats";
import { Subjects } from "../subjects/Subjects";

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract queueGroupName: string;
  abstract onMessage(data: T["data"], msg: Msg, replyTo: any): void;
  protected client: any;
  protected ackWait = 5 * 1000;
  protected subscription?: Subscription | any;

  constructor(client: any) {
    this.client = client;
  }

  subscriptionOptions() {
    return {
      queue: this.queueGroupName,
      durableName: this.queueGroupName,
      deliverAllAvailable: true,
      ackWait: this.ackWait,
    };
  }

  async listen() {
    this.subscription = await this.client.subscribe(
      this.subject,
      this.subscriptionOptions(),
      (msg: Msg, replyTo: any) => {
        const parsedData = this.parseMessage(msg);
        this.onMessage(parsedData, msg, replyTo);
      }
    );

    this.subscription.on("message", (msg: Msg, replyTo: any) => {
      const parsedData = this.parseMessage(msg);
      this.onMessage(parsedData, msg, replyTo);
    });
  }

  parseMessage(msg: Msg) {
    const data = msg.data;
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString());
  }
}
