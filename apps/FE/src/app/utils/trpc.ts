import type { AppRouter } from '../../../../BE/src/infrastructure/trpc/router';
import { createTRPCReact } from '@trpc/react-query';

export const trpc: ReturnType<typeof createTRPCReact<AppRouter>> =
  createTRPCReact<AppRouter>();
