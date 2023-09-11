import './App.css';

import { DynamicWidget, DynamicContextProvider } from "@dynamic-labs/sdk-react";

function App() {
  
return (
    <div className="App">
      <DynamicContextProvider
        settings={{
            environmentId: "8b5038f9-171c-480b-9f3c-294d868aeb74"
        }}
        
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
