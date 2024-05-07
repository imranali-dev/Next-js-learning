import { MessageInterface } from "./user.interface";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<MessageInterface>
};