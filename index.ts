export type CheckType = 'code' | 'paragraph' | 'paraphrase';

export type Profession = 'academic' | 'legal' | 'technical' | 'casual';

export interface CheckResult {
  uniquenessScore: number;
  matches: Array<{
    text: string;
    similarity: number;
  }>;
  timestamp: string;
}