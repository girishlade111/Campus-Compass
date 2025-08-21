// src/ai/flows/answer-student-questions.ts
'use server';

/**
 * @fileOverview An AI chatbot to answer student questions about the university.
 *
 * - answerStudentQuestions - A function that answers student questions.
 * - AnswerStudentQuestionsInput - The input type for the answerStudentQuestions function.
 * - AnswerStudentQuestionsOutput - The return type for the answerStudentQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStudentQuestionsInputSchema = z.object({
  question: z.string().describe('The question asked by the student.'),
});

export type AnswerStudentQuestionsInput = z.infer<
  typeof AnswerStudentQuestionsInputSchema
>;

const AnswerStudentQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the student question.'),
});

export type AnswerStudentQuestionsOutput = z.infer<
  typeof AnswerStudentQuestionsOutputSchema
>;

export async function answerStudentQuestions(
  input: AnswerStudentQuestionsInput
): Promise<AnswerStudentQuestionsOutput> {
  return answerStudentQuestionsFlow(input);
}

const answerStudentQuestionsPrompt = ai.definePrompt({
  name: 'answerStudentQuestionsPrompt',
  input: {schema: AnswerStudentQuestionsInputSchema},
  output: {schema: AnswerStudentQuestionsOutputSchema},
  prompt: `You are a helpful AI chatbot for a university website.

  Answer the following question from a student:

  {{question}}
  `,
});

const answerStudentQuestionsFlow = ai.defineFlow(
  {
    name: 'answerStudentQuestionsFlow',
    inputSchema: AnswerStudentQuestionsInputSchema,
    outputSchema: AnswerStudentQuestionsOutputSchema,
  },
  async input => {
    const {output} = await answerStudentQuestionsPrompt(input);
    return output!;
  }
);
