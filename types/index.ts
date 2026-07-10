// ─── Category Types ───────────────────────────────────────────────────────────

export type CareerOption =
  | 'Student' | 'Software Engineer' | 'Designer' | 'Doctor' | 'Nurse'
  | 'Teacher' | 'Lawyer' | 'Accountant' | 'Entrepreneur' | 'Marketing'
  | 'Finance' | 'Artist' | 'Musician' | 'Writer' | 'Chef' | 'Athlete'
  | 'Scientist' | 'Engineer' | 'Pharmacist' | 'Architect' | 'Social Worker'
  | 'Filmmaker' | 'Photographer' | 'Real Estate' | 'Other';

export type HobbyOption =
  | 'Gaming' | 'Hiking' | 'Reading' | 'Cooking' | 'Travelling' | 'Music'
  | 'Photography' | 'Fitness' | 'Dancing' | 'Painting' | 'Writing' | 'Cycling'
  | 'Swimming' | 'Yoga' | 'Volunteering' | 'Gardening' | 'Film & TV' | 'Fashion'
  | 'Sports' | 'Podcasting' | 'Other';

export type ReligionOption =
  | 'Christian' | 'Muslim' | 'Jewish' | 'Hindu' | 'Buddhist' | 'Sikh'
  | 'Atheist' | 'Agnostic' | 'Spiritual (no religion)' | 'Other'
  | 'Prefer not to say';

export type FoodOption =
  | 'Omnivore' | 'Vegetarian' | 'Vegan' | 'Pescatarian' | 'Halal'
  | 'Kosher' | 'Gluten-free' | 'Keto' | 'No restrictions' | 'Other';

export type PersonalityOption = 'Introvert' | 'Extrovert' | 'Ambivert';

export type CategoryKey = 'career' | 'hobbies' | 'religion' | 'food' | 'personality';

export interface UserCategories {
  career: CareerOption;
  hobbies: HobbyOption;
  religion: ReligionOption;
  food: FoodOption;
  personality: PersonalityOption;
}

export type MandatoryCategories = [CategoryKey, CategoryKey];

// ─── User Types ───────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  bio: string;
  avatar_url: string | null;
  categories: UserCategories;
  mandatory_categories: MandatoryCategories;
  created_at: string;
  updated_at: string;
}

export interface UserProfile extends User {
  compatibility_score?: number;
  shared_categories?: CategoryKey[];
}

// ─── Match Types ──────────────────────────────────────────────────────────────

export type MatchStatus = 'pending' | 'matched' | 'rejected';

export interface Match {
  id: string;
  user_id: string;
  target_user_id: string;
  status: MatchStatus;
  created_at: string;
}

export interface MatchResult {
  match: Match;
  profile: UserProfile;
}

// ─── Message Types ────────────────────────────────────────────────────────────

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  read: boolean;
}

export interface Chat {
  id: string;
  match_id: string;
  participants: [string, string];
  last_message: Message | null;
  created_at: string;
}

export interface ChatWithProfile extends Chat {
  other_user: UserProfile;
  unread_count: number;
}

// ─── Auth Types ───────────────────────────────────────────────────────────────

export interface Session {
  access_token: string;
  refresh_token: string;
  user: { id: string; email: string };
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}