import { Post } from "../domain/post";
import { PostRepositoryPort } from "../domain/post-repository";

export class GetPostUseCase {
  constructor(private readonly postRepository: PostRepositoryPort) {}
  async execute(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }
}
