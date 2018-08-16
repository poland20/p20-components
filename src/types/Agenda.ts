export type EventCategory = {
  name: string;
  color: string;
};

export type EventSpeaker = {
  name: string;
  photo: {
    secure_url: string;
  };
};

export type EventTime = {
  startDate?: Date;
  endDate?: Date;
};

export type VenueLocation = {
  street1?: string;
  street2?: string;
  suburb?: string;
  postcode?: string;
};

export type EventVenue = {
  name: string;
  location?: VenueLocation;
};

export type EventType = {
  name: string;
  type: string;
  description: string;
  slug: string;
  category?: EventCategory;
  time?: EventTime;
  speakers?: EventSpeaker[];
  venue?: EventVenue;
};

export type Day = {
  name: string;
  date: Date;
  description: string;
  venue: string;
  events?: EventType[];
};

export type AgendaType = {
  days: Day[];
};
