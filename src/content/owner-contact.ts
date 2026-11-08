/**
 * KESTA owner's PUBLIC, verified, explicitly approved contact details only.
 * Never place the external market-reference listing publisher's phone/Line here.
 * Nothing is displayed until the owner actually supplies the information.
 */
export type ContactChannel = {
  id: "phone" | "viber" | "messenger" | "line" | "email";
  label: string;
  href: string;
};
export const ownerContactChannels: ContactChannel[] = [];
