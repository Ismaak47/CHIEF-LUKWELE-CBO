import { Cause, UpcomingEvent, Testimonial } from './types';

export const CAUSES: Cause[] = [
  {
    id: "cause-1",
    title: "Ensure Safe Water for Rural African Communities",
    category: "Water Sanitation",
    description: "Access to clean water changes everything. We are constructing water wells and purification systems in suburban villages to reduce water-borne illnesses.",
    raised: 18450,
    goal: 25000,
    image: "https://images.unsplash.com/photo-1541913757954-ef4bb79c09bf?auto=format&fit=crop&q=80&w=600",
    donorsCount: 142
  },
  {
    id: "cause-2",
    title: "Quality Primary Education and Supplies for Children",
    category: "Education",
    description: "Empower the next generation by providing school kits, learning materials, and rebuilding dilapidated school libraries in lower-income communities.",
    raised: 12100,
    goal: 15000,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
    donorsCount: 98
  },
  {
    id: "cause-3",
    title: "Emergency Nutrition Support for Under-5 Children",
    category: "Health & Food",
    description: "Combating acute malnutrition by delivering life-saving therapeutic milk, high-energy food packets, and maternal medical check-ups in crisis zones.",
    raised: 28900,
    goal: 30000,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600",
    donorsCount: 215
  },
  {
    id: "cause-4",
    title: "Reforestation and Sustainable Local Agriculture",
    category: "Environment",
    description: "Combat climate change while creating sustainable livelihoods. Planting thousands of indigenous fruit trees and training locals in eco-farming.",
    raised: 8200,
    goal: 20000,
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600",
    donorsCount: 64
  }
];

export const EVENTS: UpcomingEvent[] = [
  {
    id: "event-1",
    title: "Annual Charity Run for Hunger Relief",
    date: "25",
    month: "OCT",
    time: "08:00 AM - 12:00 PM",
    location: "Central Park Arena, New York",
    description: "Join hundreds of runners as we raise funds for municipal food banks and immediate meal distribution campaigns. Registration online is active.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "event-2",
    title: "Clean Oceans and Beach Recycling Drive",
    date: "12",
    month: "NOV",
    time: "09:00 AM - 03:00 PM",
    location: "Santa Monica Beach Pier, CA",
    description: "Help pull hazardous plastics from our precious shores. Eco-scientists will present the current state of marine biology following the clean-up.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "event-3",
    title: "Virtual Auction: Art for Local Orphans",
    date: "04",
    month: "DEC",
    time: "06:00 PM - 09:00 PM",
    location: "Live Stream / Zoom Webcast",
    description: "Bid on stunning artwork by renowned regional artists. 100% of high-bid proceeds directly fund educational scholarships and orphanage repairs.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Regular Donor",
    quote: "Finding an organization with transparent reporting and a heart for direct grassroots action felt impossible. Witnessing the CHIEF LUKWELE CBO team establish active wells in our village brings pure joy.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "David Adeleke",
    role: "Community Partner",
    quote: "Through the CHIEF LUKWELE CBO scholarship programs, we were able to transition twelve orphaned teens into tech academies. Their operational integrity is second to none.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Active Volunteer Coordinator",
    quote: "Being a volunteer with CHIEF LUKWELE CBO since 2024 has renewed my perspective on global collaboration. Clean-up events are beautifully organized, secure, and incredibly impactful.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];
