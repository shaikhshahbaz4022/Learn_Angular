export interface Post {
  id: number;
  username: string;
  title: string;
}

export interface Comment {
  id: number;
  username: string;
  text: string;
}

export interface Like {
  postID: number;
  username: string;
}
