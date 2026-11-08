import "server-only";
import { demoProperties } from "@/content/demo-properties";
import type { Property } from "@/types/property";

// This service is the read-side boundary. Replace with a database repository
// once the owner provides real property records and storage credentials.
export async function listPublicProperties(): Promise<Property[]> {
  return demoProperties.filter((item) => item.status === "available");
}

export async function getPublicProperty(slug: string): Promise<Property | null> {
  return (await listPublicProperties()).find((item) => item.slug === slug) ?? null;
}
