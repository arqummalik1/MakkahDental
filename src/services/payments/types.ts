export type PaymentProvider = "stripe" | "paypal" | "square";

export type CreateCheckoutSessionRequest = {
  provider: PaymentProvider;
  amountMinor: number;
  currency: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
  successUrl: string;
  cancelUrl: string;
};

export type CreateCheckoutSessionResponse = {
  provider: PaymentProvider;
  checkoutUrl: string;
  sessionId: string;
};

export interface PaymentsService {
  createCheckoutSession(
    req: CreateCheckoutSessionRequest,
  ): Promise<CreateCheckoutSessionResponse>;
}
