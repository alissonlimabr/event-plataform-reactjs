import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/Router"
import { client } from "./lib/apollo"
function App() {
  return (
      <ApolloProvider client={client}>
        {/* "Provider do react-router-dom" */}
        <BrowserRouter>
        {/* component router que define as rotas que eu quero chamar */}
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    )
}

export default App
