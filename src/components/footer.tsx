import Link from 'next/link';
import { GraduationCap, Instagram, Linkedin, Github, Codepen, Mail } from 'lucide-react';

const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/girish_lade_/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/girish-lade-075bba201/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/girishlade111",
      label: "GitHub",
    },
    {
      icon: <Codepen className="h-5 w-5" />,
      href: "https://codepen.io/Girish-Lade-the-looper",
      label: "Codepen",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:girishlade111@gmail.com",
      label: "Email",
    },
]

export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg font-headline">Campus Compass</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact Us</Link>
          </nav>
        </div>

        <div className="flex justify-center mt-8">
            <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                    <a 
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Campus Compass University. All rights reserved.</p>
          <p className="mt-1">Innovate. Lead. Succeed.</p>
        </div>
      </div>
    </footer>
  );
}
