export interface Cause {
  id: string;
  title: string;
  category: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
  donorsCount: number;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Volunteer {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}
