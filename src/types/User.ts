export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  imageUrl: string;
  hasPayed: boolean;
  taskIds: string[];
  notesIds: string[];
  presentationIds: string[];
  createdAt: Date;
  updatedAt: Date;
};
