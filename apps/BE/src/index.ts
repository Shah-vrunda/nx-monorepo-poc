import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './infrastructure/trpc/router';

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Use the tRPC express middleware
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
