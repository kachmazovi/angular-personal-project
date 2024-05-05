export interface IMessage {
  id?: string;
  from?: string | null;
  to?: string | null;
  subject: string;
  body: string;
  date: string;
  read: boolean;
}
