export interface Message {
  id: string;
  type: MessageType;
  service?: string;
  payload?: any;
  message?: string;
  autoClose?: number;
  horizontalPosition?: string;
  verticalPosition?: string
}

export enum MessageType {
  Success,
  Error,
  Info,
  Warning,
  System,
}
