import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import FilterTabs from 'src/views/FilterTabs';

const ProductsPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FilterTabs />
    </QueryClientProvider>
  );
};

export default ProductsPage;
