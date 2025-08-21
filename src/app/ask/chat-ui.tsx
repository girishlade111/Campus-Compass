"use client";

import { useState, useRef, useEffect, useTransition } from 'react';
import { answerStudentQuestions } from '@/ai/flows/answer-student-questions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      try {
        const result = await answerStudentQuestions({ question: input });
        const assistantMessage: Message = {
          role: 'assistant',
          content: result.answer,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Error answering question:', error);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem communicating with the AI assistant. Please try again later.",
        });
        setMessages(prev => prev.slice(0, -1)); // remove the user message if AI fails
      }
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('div');
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <Card className="flex flex-col h-full shadow-lg">
      <CardHeader className="border-b">
        <h2 className="text-lg font-semibold">Chat with Assistant</h2>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-4',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <Bot className="h-6 w-6" />
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-md rounded-lg p-3',
                    message.role === 'user'
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="bg-accent text-accent-foreground rounded-full p-2">
                    <User className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
            {isPending && (
                <div className="flex items-start gap-4 justify-start">
                    <div className="bg-primary text-primary-foreground rounded-full p-2">
                        <Bot className="h-6 w-6" />
                    </div>
                    <div className="bg-muted text-muted-foreground rounded-lg p-3 flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking...
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            disabled={isPending}
            autoComplete="off"
          />
          <Button type="submit" disabled={isPending || !input.trim()}>
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
