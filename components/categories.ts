import type {
  CareerOption,
  HobbyOption,
  ReligionOption,
  FoodOption,
  PersonalityOption,
  CategoryKey,
} from '../types';

export const CAREER_OPTIONS: CareerOption[] = [
  'Student', 'Software Engineer', 'Designer', 'Doctor', 'Nurse',
  'Teacher', 'Lawyer', 'Accountant', 'Entrepreneur', 'Marketing',
  'Finance', 'Artist', 'Musician', 'Writer', 'Chef', 'Athlete',
  'Scientist', 'Engineer', 'Pharmacist', 'Architect', 'Social Worker',
  'Filmmaker', 'Photographer', 'Real Estate', 'Other',
];

export const HOBBY_OPTIONS: HobbyOption[] = [
  'Gaming', 'Hiking', 'Reading', 'Cooking', 'Travelling', 'Music',
  'Photography', 'Fitness', 'Dancing', 'Painting', 'Writing', 'Cycling',
  'Swimming', 'Yoga', 'Volunteering', 'Gardening', 'Film & TV', 'Fashion',
  'Sports', 'Podcasting', 'Other',
];

export const RELIGION_OPTIONS: ReligionOption[] = [
  'Christian', 'Muslim', 'Jewish', 'Hindu', 'Buddhist', 'Sikh',
  'Atheist', 'Agnostic', 'Spiritual (no religion)', 'Other', 'Prefer not to say',
];

export const FOOD_OPTIONS: FoodOption[] = [
  'Omnivore', 'Vegetarian', 'Vegan', 'Pescatarian', 'Halal',
  'Kosher', 'Gluten-free', 'Keto', 'No restrictions', 'Other',
];

export const PERSONALITY_OPTIONS: PersonalityOption[] = [
  'Introvert', 'Extrovert', 'Ambivert',
];

export const CATEGORY_META: Record<CategoryKey, {
  label: string;
  emoji: string;
  options: string[];
}> = {
  career: {
    label: 'Career',
    emoji: '💼',
    options: CAREER_OPTIONS,
  },
  hobbies: {
    label: 'Hobbies',
    emoji: '🎯',
    options: HOBBY_OPTIONS,
  },
  religion: {
    label: 'Religion',
    emoji: '🌿',
    options: RELIGION_OPTIONS,
  },
  food: {
    label: 'Food',
    emoji: '🍽️',
    options: FOOD_OPTIONS,
  },
  personality: {
    label: 'Personality',
    emoji: '✨',
    options: PERSONALITY_OPTIONS,
  },
};

export const CATEGORY_KEYS: CategoryKey[] = [
  'career', 'hobbies', 'religion', 'food', 'personality',
];