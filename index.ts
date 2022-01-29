import { vod } from "@renke/vommer";
import { z } from "zod";

export const UserId = vod("UserId", z.string());

export type UserId = z.infer<typeof UserId>;

export const Email = vod("Email", z.string().min(0));

export type Email = z.infer<typeof Email>;

export const User = vod(
  "User",
  z.object({
    id: UserId,
    email: Email,
  })
);

export type User = z.infer<typeof User>;
