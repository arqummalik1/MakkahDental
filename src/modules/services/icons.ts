import {
  Activity,
  Smile,
  Crown,
  Zap,
  Scissors,
  Building2,
  Anchor,
  Sparkles,
  Wand2,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { ClinicService } from "./types";

export const serviceIconMap: Record<ClinicService["iconKey"], LucideIcon> = {
  rootCanal: Activity,
  braces: Smile,
  crowns: Crown,
  laser: Zap,
  wisdom: Scissors,
  surgery: Building2,
  implants: Anchor,
  whitening: Sparkles,
  cosmetic: Wand2,
  prosthodontics: Shield,
};
