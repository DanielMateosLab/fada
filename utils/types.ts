interface DayEvent {
  time: string;
  kind: "show" | "break";
}

export interface Show extends DayEvent {
  kind: "show";
  title: string;
  author: string;
  // Year of release
  year?: number;
  // Duration in minutes
  duration: number;
  // Additional information
  notes?: string;
}

export interface Break extends DayEvent {
  kind: "break";
  name: "Dîner";
}

export interface Day {
  date: string;
  events: Array<Show | Break>;
}
