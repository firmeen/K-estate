import "server-only";
import { demoProperties } from "@/content/demo-properties";
import type { Property } from "@/types/property";

/** Static, read-only entries; reference records are never treated as KESTA-owned stock. */
export async function listPublicProperties(): Promise<Property[]> {
  return demoProperties.filter(item => item.status === "available" || item.status === "reference");
}
export async function getPublicProperty(slug: string): Promise<Property | null> {
  return (await listPublicProperties()).find(item => item.slug === slug) ?? null;
}
