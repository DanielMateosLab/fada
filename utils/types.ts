interface DayEvent {
  time: string;
}

export interface Show extends DayEvent {
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
  name: "Dîner";
}

export interface Day {
  date: string;
  events: Array<Show | Break>;
}
