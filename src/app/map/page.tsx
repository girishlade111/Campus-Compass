import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Campus Map</h1>
        <p className="mt-4 text-lg text-muted-foreground">Find your way around Campus Compass University.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative w-full aspect-video">
              <Image
                src="https://placehold.co/1200x800.png"
                alt="Campus Map"
                layout="fill"
                objectFit="cover"
                data-ai-hint="university map"
              />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 <p className="text-white text-2xl font-bold bg-black/50 p-4 rounded-md">Interactive Map Coming Soon</p>
               </div>
            </div>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Search /> Find a Location</CardTitle>
              <CardDescription>Search for buildings, departments, or services.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="e.g. Library" />
                <Button type="submit">Search</Button>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="font-semibold">Popular Locations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><MapPin className="h-4 w-4" /> Admissions Office</li>
                  <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><MapPin className="h-4 w-4" /> University Library</li>
                  <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><MapPin className="h-4 w-4" /> Student Union</li>
                  <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><MapPin className="h-4 w-4" /> Comet Cafe</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
