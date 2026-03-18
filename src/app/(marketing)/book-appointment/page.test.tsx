import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import BookAppointmentPage from "./page";
import { useAppointmentStore } from "@/stores/appointmentStore";

const push = vi.fn();

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual<typeof import("next/navigation")>("next/navigation");
  return {
    ...actual,
    useRouter: () => ({ push }),
  };
});

describe("BookAppointmentPage", () => {
  beforeEach(() => {
    push.mockReset();
    useAppointmentStore.setState({ draft: null });
  });

  it("validates required fields", async () => {
    render(<BookAppointmentPage />);
    await userEvent.click(screen.getByRole("button", { name: "Submit Request" }));
    expect(await screen.findByText("Full name is required")).toBeInTheDocument();
    expect(screen.getByText("Phone number is required")).toBeInTheDocument();
    expect(screen.getByText("Select a service")).toBeInTheDocument();
    expect(screen.getByText("Select a date")).toBeInTheDocument();
    expect(screen.getByText("Select a time slot")).toBeInTheDocument();
  });

  it("stores draft and navigates on submit", async () => {
    render(<BookAppointmentPage />);
    await userEvent.type(screen.getByLabelText("Full Name"), "Aisha Khan");
    await userEvent.type(screen.getByLabelText("Phone Number"), "7006012345");
    await userEvent.selectOptions(screen.getByLabelText("Select Service"), "Dental Braces");
    await userEvent.type(screen.getByLabelText("Preferred Date"), "2026-03-22");
    await userEvent.selectOptions(screen.getByLabelText("Preferred Time Slot"), "11:00 AM – 12:00 PM");
    await userEvent.click(screen.getByRole("button", { name: "Submit Request" }));

    expect(push).toHaveBeenCalledWith("/appointment-confirmed");
    const { draft } = useAppointmentStore.getState();
    expect(draft?.fullName).toBe("Aisha Khan");
    expect(draft?.service).toBe("Dental Braces");
  });
});
