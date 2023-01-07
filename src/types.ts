export interface Room {
  roomId: string;
  roomTitle: string;
  password?: string;
  maxParticipants: number;
  creator: User;
  participants: Participant[];
}

export interface Participant extends User {
  vote?: string;
}

export interface User {
  userId: string;
  userName: string;
}
