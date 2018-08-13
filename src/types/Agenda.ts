export type Edition = {
  year: number;
  name: string;
  current: boolean;
  description: string;
  caption: string;
};

export type EventType = {
  name: string;
  type: string;
  description: string;
  slug: string;
  category?: {
    name: string;
    color: string;
  };
  time?: {
    start?: Date;
    end?: Date;
  }
};

export type Day = {
  name: string;
  date: Date;
  description: string;
  venue: string;
  edition: string;
  image: string;
  // the data that eventually is populated by reverse population
  events?: EventType[];
};

export type AgendaType = {
  days: Day[];
  edition?: Edition;
};
