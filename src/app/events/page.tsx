import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockEvents } from '@/lib/mock-data';
import { Calendar, Clock, MapPin } from 'lucide-react';
import type { CampusEvent } from '@/lib/types';
import { Button } from '@/components/ui/button';

function EventCard({ event }: { event: CampusEvent }) {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={event.imageUrl} alt={event.title} layout="fill" objectFit="cover" data-ai-hint={event.aiHint} />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
            <Badge variant={event.category === 'Academic' ? 'default' : 'secondary'}>{event.category}</Badge>
        </div>
        <CardDescription className="pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" /> {formattedDate}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1"><Clock className="h-4 w-4" /> {event.time}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1"><MapPin className="h-4 w-4" /> {event.location}</div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function EventsPage() {
  return (
    <div className="bg-primary/5 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Upcoming Events</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            There's always something happening at Campus Compass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
