export interface AddForum {
  userId: number;
  title: string;
  content: string;
  type: Array<string>;
  img: Array<string>;
  newTime: string;
}
