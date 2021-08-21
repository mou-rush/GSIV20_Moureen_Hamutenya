import React from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div className="content">
            <Navbar />
            <Movies />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
