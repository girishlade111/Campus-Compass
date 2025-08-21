export interface CampusEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Academic' | 'Social' | 'Sports' | 'Arts';
  imageUrl: string;
  aiHint: string;
}

export interface StudentCourse {
  code: string;
  title: string;
  instructor: string;
  time: string;
  location: string;
}

export interface StudentNotification {
  id: number;
  message: string;
  read: boolean;
  date: string;
}
