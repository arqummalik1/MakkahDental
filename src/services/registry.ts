import { MockPaymentsService } from "./payments/mock";

export const services = {
  payments: new MockPaymentsService(),
};
