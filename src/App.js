import "./App.css";

import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthersExtension } from "@dynamic-labs/ethers-v5";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

function App() {
  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
          walletConnectorExtensions: [EthersExtension],
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
