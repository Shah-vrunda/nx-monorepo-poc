import { Post } from "../../domain/post";
import { PostRepositoryPort } from "../../domain/post-repository";

export class InMemoryPostRepository implements PostRepositoryPort {
  private posts: Post[] = [
    {
      id: "1",
      title: "Hexagonal Architecture",
      content: "A design pattern...",
      authorId: "user1",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "tRPC with Express",
      content: "A guide to...",
      authorId: "user2",
      createdAt: new Date(),
    },
  ];

  async getPosts(): Promise<Post[]> {
    return this.posts;
  }

  async getPostById(id: string): Promise<Post | undefined> {
    return this.posts.find((post) => post.id === id);
  }
}
