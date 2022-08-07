import { ITEM_AUTH_TOKEN } from "../lib/constants";

function removeItem(key: string) {
  localStorage.removeItem(key);
}

function getItem(key: string): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  } else {
    return null;
  }
}

export function getItem_auth_token(): string | null {
  return getItem(ITEM_AUTH_TOKEN);
}

export function removeItem_auth_token() {
  return removeItem(ITEM_AUTH_TOKEN);
}
