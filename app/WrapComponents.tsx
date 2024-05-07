// QueryProvider.tsx
'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { ReactNode, FC } from "react";

const queryClient = new QueryClient();

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
