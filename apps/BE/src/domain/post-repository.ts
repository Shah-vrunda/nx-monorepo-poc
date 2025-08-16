import { Post } from "./post";

export interface PostRepositoryPort {
  getPosts(): Promise<Post[]>;
  getPostById(id: string): Promise<Post | undefined>;
}
