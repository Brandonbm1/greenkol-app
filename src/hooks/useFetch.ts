import { config } from "../config/config";

const BASE_URL = config.API_URL;

export const GET = async (url: string) => {
  const res = await fetch(`${BASE_URL}/${url}`);
  const json = await res.json();
  return json;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = async (url: string, body: any) => {
  const res = await fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const json = await res.json();
  return json;
};
