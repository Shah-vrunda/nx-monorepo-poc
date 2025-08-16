import { publicProcedure, router } from "./index";

import { InMemoryPostRepository } from "../data-access/in-memory-repository";
import { GetPostUseCase } from "../../application/get-post";

// The Inbound Adapter (tRPC) orchestrates the flow
// It creates the use case and injects the outbound adapter (the repository)
const postRepository = new InMemoryPostRepository();
const getPostUseCase = new GetPostUseCase(postRepository);

export const appRouter = router({
  posts: {
    list: publicProcedure.query(async () => {
      return getPostUseCase.execute();
    }),
  },
});

export type AppRouter = typeof appRouter;
