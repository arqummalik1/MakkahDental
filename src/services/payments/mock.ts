import type {
  CreateCheckoutSessionRequest,
  CreateCheckoutSessionResponse,
  PaymentsService,
} from "./types";

export class MockPaymentsService implements PaymentsService {
  async createCheckoutSession(
    req: CreateCheckoutSessionRequest,
  ): Promise<CreateCheckoutSessionResponse> {
    return {
      provider: req.provider,
      checkoutUrl: `${req.successUrl}?demoCheckout=1&provider=${req.provider}`,
      sessionId: `demo_${req.provider}_${Date.now()}`,
    };
  }
}
