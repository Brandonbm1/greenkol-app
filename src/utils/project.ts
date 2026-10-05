import moment from "moment";
import type { IProject } from "../model/interfaces/IProject";

const DURATION_UNITS: { unit: "days" | "weeks" | "months"; label: string; max: number }[] = [
  { unit: "days", label: "días", max: 15 },
  { unit: "weeks", label: "semanas", max: 10 },
  { unit: "months", label: "meses", max: Infinity },
];

export const getProjectDuration = (start?: string, end?: string) => {
  if (!start || !end) return "";
  const startDate = moment(start);
  const endDate = moment(end);

  for (const { unit, label, max } of DURATION_UNITS) {
    const duration = endDate.diff(startDate, unit);
    if (duration <= max) return `${duration} ${label}`;
  }
  return "";
};

export const getMajorMaterial = (project: IProject) =>
  (project.specifications?.materials ?? []).find((m) => m.type === "major")?.shortName ?? "";

export const getProjectCover = (project: IProject) => {
  const first = project.images?.[0];
  return first ? first.url || first.image.url : "";
};
