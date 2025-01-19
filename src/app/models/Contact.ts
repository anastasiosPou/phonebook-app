/*
Contact represents each contact created in the app. It's the primary model for Phonebook.
*/
export interface Contact {
  readonly id: number;
  firstName: string;
  lastName: string;
  cellNumber: string;
}