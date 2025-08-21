import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const tourStops = [
  {
    title: 'The Grand Library',
    description: 'A hub of knowledge with over a million volumes and state-of-the-art study spaces.',
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'modern library interior'
  },
  {
    title: 'Innovation Hall',
    description: 'Home to our top-ranked engineering and computer science programs, featuring advanced labs.',
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'technology lab'
  },
  {
    title: 'Student Life Center',
    description: 'The heart of campus, with dining, lounges, and spaces for student organizations to meet.',
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'student union'
  },
  {
    title: 'Victory Stadium',
    description: 'Home of the Comets! Join thousands of fans to cheer on our athletic teams.',
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'college stadium'
  },
    {
    title: 'University Green',
    description: 'A beautiful open space for students to relax, study, and enjoy campus events.',
    imageUrl: 'https://placehold.co/800x600.png',
    aiHint: 'university lawn'
  },
];

export default function VirtualTourPage() {
  return (
    <div>
      <section className="relative h-[50vh] bg-gray-800 text-white flex items-center justify-center">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Campus aerial view"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="university campus aerial"
        />
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Virtual Campus Tour</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Explore Campus Compass from anywhere in the world.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {tourStops.map((stop, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex flex-col aspect-square items-start justify-end p-0">
                        <div className="relative w-full h-full">
                           <Image
                            src={stop.imageUrl}
                            alt={stop.title}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={stop.aiHint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-6 text-white">
                             <h3 className="text-2xl font-bold font-headline">{stop.title}</h3>
                             <p className="mt-2 text-white/90">{stop.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
