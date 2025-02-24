import { Location as GeoLocation } from "hk-bus-eta";

export interface DaySchedule {
  day: number;
  // use start, end only if allDay is false
  start: {
    hour: number;
    minute: number;
  };
  end: {
    hour: number;
    minute: number;
  };
}

export interface RouteCollection {
  name: string;
  list: string[];
  schedules: DaySchedule[];
}

export const DEFAULT_DAY_SCHEDULE: DaySchedule = {
  day: 0, // 0: Sunday, 1: Monday, ...
  start: {
    hour: 0,
    minute: 0,
  },
  end: {
    hour: 23,
    minute: 59,
  },
};

export const DEFAULT_ROUTE_COLLECTION: RouteCollection = {
  name: "New Collection",
  list: [],
  schedules: Array(7)
    .fill(0)
    .map((v, idx) => ({
      ...DEFAULT_DAY_SCHEDULE,
      day: idx,
    })),
};

export type TransportType = "bus" | "minibus" | "lightRail" | "mtr";

export type BoardTabType = "recent" | "all" | TransportType;

export type StatusType = "ready" | "rendering" | "waiting";

export type CustomLocation = { location: GeoLocation } | null

export interface Locations {
  start: CustomLocation;
  end: CustomLocation;
}

export interface SearchResultIdx {
  resultIdx: number;
  stopIdx: number[];
}

export type SearchResultType = Array<{
  routeId: string;
  on: number;
  off: number;
}>;
