import React from "react";
import Movies from "./components/Movies";

import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "./components/SearchBar";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div className="content">
            <SearchBar />
            <Movies />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
