"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GraduationCap, Menu, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/map', label: 'Map' },
  { href: '/virtual-tour', label: 'Virtual Tour' },
  { href: '/events', label: 'Events' },
  { href: '/ask', label: 'Ask Assistant' },
];

export default function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'transition-colors hover:text-primary',
          pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground',
          isMobile && 'block p-4 text-lg'
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg font-headline">Campus Compass</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {renderNavLinks()}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/login">
              <User className="mr-2 h-4 w-4" /> Student Portal
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-8">
                <Link href="/" className="flex items-center gap-2 mb-4 px-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl font-headline">Campus Compass</span>
                </Link>
                {renderNavLinks(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
