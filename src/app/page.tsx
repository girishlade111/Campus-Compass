import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, Compass, Calendar, Bot, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Interactive Map',
    description: 'Find your way around campus with ease.',
    icon: <Map className="h-8 w-8 text-primary" />,
    href: '/map',
  },
  {
    title: 'Virtual Tour',
    description: 'Explore our beautiful campus from anywhere.',
    icon: <Compass className="h-8 w-8 text-primary" />,
    href: '/virtual-tour',
  },
  {
    title: 'Event Calendar',
    description: 'Stay up-to-date with the latest events.',
    icon: <Calendar className="h-8 w-8 text-primary" />,
    href: '/events',
  },
  {
    title: 'Smart Assistant',
    description: 'Get instant answers to your questions.',
    icon: <Bot className="h-8 w-8 text-primary" />,
    href: '/ask',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
            <h1 className="ml-4 text-4xl md:text-6xl font-bold font-headline text-gray-800">
              Campus Compass
            </h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovate. Lead. Succeed. Your journey starts here.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/virtual-tour">Take a Virtual Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/ask">Ask Our AI Assistant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
            Everything You Need to Navigate University Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="font-headline">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Students walking on campus"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="university campus"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Experience Vibrant Campus Life
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                From state-of-the-art facilities to a thriving student community, discover an environment where you can learn, grow, and make lifelong connections.
              </p>
              <Button asChild size="lg">
                <Link href="/events">See Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
