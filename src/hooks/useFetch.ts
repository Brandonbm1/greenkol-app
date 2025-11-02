import { config } from "../config/config";

const BASE_URL = config.API_URL;

export const GET = async (url: string) => {
  const res = await fetch(`${BASE_URL}/${url}`);
  const json = await res.json();
  return json;
};
