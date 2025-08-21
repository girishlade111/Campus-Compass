// src/app/login/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { SignInPage, type Testimonial } from "@/components/ui/sign-in";

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://placehold.co/100x100.png",
    name: "Sarah Chen",
    handle: "@sarahdigital",
    text: "Amazing platform! The user experience is seamless and the features are exactly what I needed.",
    aiHint: "student portrait",
  },
  {
    avatarSrc: "https://placehold.co/100x100.png",
    name: "Marcus Johnson",
    handle: "@marcustech",
    text: "This service has transformed how I work. Clean design, powerful features, and excellent support.",
    aiHint: "student portrait",
  },
  {
    avatarSrc: "https://placehold.co/100x100.png",
    name: "David Martinez",
    handle: "@davidcreates",
    text: "I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity.",
    aiHint: "student portrait",
  },
];


export default function LoginPage() {
  const router = useRouter();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you'd have authentication logic here.
    // For this demo, we'll just redirect to the portal.
    router.push('/portal');
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    router.push('/portal');
  };

  const handleResetPassword = () => {
    // Handle reset password
  }

  const handleCreateAccount = () => {
    // Handle create account
  }

  return (
    <div className="bg-background text-foreground">
      <SignInPage
        heroImageSrc="https://placehold.co/1080x1920.png"
        heroImageAiHint="university library"
        testimonials={sampleTestimonials}
        onSignIn={handleSignIn}
        onGoogleSignIn={handleGoogleSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
}
