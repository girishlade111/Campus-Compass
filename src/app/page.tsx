import { Button } from '@/components/ui/button';
import { Map, Compass, Calendar, Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowCard } from '@/components/ui/spotlight-card';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const features = [
  {
    title: 'Interactive Map',
    description: 'Find your way around campus with ease.',
    icon: <Map className="h-8 w-8 text-primary" />,
    href: '/map',
    glowColor: 'blue' as 'blue' | 'purple',
  },
  {
    title: 'Virtual Tour',
    description: 'Explore our beautiful campus from anywhere.',
    icon: <Compass className="h-8 w-8 text-primary" />,
    href: '/virtual-tour',
    glowColor: 'purple' as 'blue' | 'purple',
  },
  {
    title: 'Event Calendar',
    description: 'Stay up-to-date with the latest events.',
    icon: <Calendar className="h-8 w-8 text-primary" />,
    href: '/events',
    glowColor: 'blue' as 'blue' | 'purple',
  },
  {
    title: 'Smart Assistant',
    description: 'Get instant answers to your questions.',
    icon: <Bot className="h-8 w-8 text-primary" />,
    href: '/ask',
    glowColor: 'purple' as 'blue' | 'purple',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroGeometric 
        badge="Campus Compass"
        title1="Innovate. Lead. Succeed."
        title2="Your Journey Starts Here."
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
            Everything You Need to Navigate University Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group h-full">
                <GlowCard 
                  className="h-full flex flex-col"
                  glowColor={feature.glowColor} 
                  customSize={true}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="font-headline text-foreground">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </GlowCard>
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
