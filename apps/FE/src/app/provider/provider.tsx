'use client';

import { trpc } from '../utils/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getFetch, httpBatchLink, loggerLink } from '@trpc/react-query';
import { useState } from 'react';
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
});
export default function TrpcProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = 'http://localhost:3003/trpc/';
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include',
            });
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
