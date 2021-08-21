import React from "react";
// import Navbar from './components/Navbar';
// import Planets from './components/Planets';
import Movies from "./components/Movies";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  //let [page, setPage] = useState("planets");
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star Wars Info</h1>
          {/* <Navbar setPage={setPage} /> */}
          <div className="content">
            <Movies />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
