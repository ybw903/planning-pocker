export interface Room {
  roomId: string;
  roomTitle: string;
  password?: string;
  maxParticipants: number;
  creator: User;
  participants: User[];
}

export interface User {
  userId: string;
  userName: string;
}
