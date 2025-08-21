import type { CampusEvent, StudentCourse, StudentNotification } from './types';

export const mockEvents: CampusEvent[] = [
  {
    id: 1,
    title: 'Annual Engineering Symposium',
    date: '2024-10-25',
    time: '9:00 AM - 5:00 PM',
    location: 'Innovation Hall, Auditorium',
    description: 'A showcase of senior design projects and research from the College of Engineering.',
    category: 'Academic',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'conference presentation',
  },
  {
    id: 2,
    title: 'Fall Fest Concert',
    date: '2024-10-28',
    time: '7:00 PM',
    location: 'University Green',
    description: 'Live music, food trucks, and activities to celebrate the fall semester.',
    category: 'Social',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'outdoor concert',
  },
  {
    id: 3,
    title: 'Homecoming Football Game',
    date: '2024-11-02',
    time: '1:00 PM',
    location: 'Victory Stadium',
    description: 'Cheer on the Campus Compass Comets as they take on their rivals.',
    category: 'Sports',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'football game',
  },
  {
    id: 4,
    title: 'Student Art Exhibition Opening',
    date: '2024-11-08',
    time: '6:00 PM - 8:00 PM',
    location: 'Fine Arts Gallery',
    description: 'Opening reception for the juried exhibition of student artwork from all disciplines.',
    category: 'Arts',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'art gallery',
  },
];

export const mockCourses: StudentCourse[] = [
    {
      code: 'CS 341',
      title: 'Data Structures & Algorithms',
      instructor: 'Dr. Ada Lovelace',
      time: 'MWF 10:00 - 10:50 AM',
      location: 'Turing Hall 201',
    },
    {
      code: 'ENG 201',
      title: 'Modern Literature',
      instructor: 'Prof. Virginia Woolf',
      time: 'TTh 1:00 - 2:15 PM',
      location: 'Orwell Building 305',
    },
    {
      code: 'PHY 150',
      title: 'Intro to Astrophysics',
      instructor: 'Dr. Carl Sagan',
      time: 'MWF 2:00 - 2:50 PM',
      location: 'Galileo Science Center 110',
    },
];

export const mockNotifications: StudentNotification[] = [
    {
        id: 1,
        message: 'Your tuition payment is due next week.',
        read: false,
        date: '2024-09-15',
    },
    {
        id: 2,
        message: 'Registration for Spring 2025 opens on October 15th.',
        read: false,
        date: '2024-09-14',
    },
    {
        id: 3,
        message: 'Your library book "The Art of Programming" is overdue.',
        read: true,
        date: '2024-09-10',
    }
]
