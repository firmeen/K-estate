/**
 * Public owner contact information. Supply verified owner-approved details before launch.
 * Do not put API tokens, passwords, or private data in this file.
 */
export type ContactChannel = {
  id: "phone" | "viber" | "messenger" | "line" | "email";
  label: string;
  href: string;
};

export const ownerContactChannels: ContactChannel[] = [
  // Example after validation:
  // { id: "email", label: "Email", href: "mailto:verified@example.com" },
];
