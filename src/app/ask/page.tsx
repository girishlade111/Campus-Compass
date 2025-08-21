import ChatUI from './chat-ui';
import { Bot } from 'lucide-react';

export default function AskPage() {
  return (
    <div className="container mx-auto px-4 py-12 h-[calc(100vh-14rem)]">
      <div className="flex flex-col items-center text-center mb-8">
        <Bot className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Campus Compass Smart Assistant
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Have a question about admissions, campus life, or academic programs? 
          Just ask! I'm here to help you find the information you need.
        </p>
      </div>

      <div className="max-w-3xl mx-auto h-full">
        <ChatUI />
      </div>
    </div>
  );
}
