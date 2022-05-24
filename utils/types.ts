export interface DayEvent {
  time?: string;
  title: string;
  metadata?: string;
  notes?: string;
}

export interface Day {
  date: string;
  events: Array<DayEvent>;
}
