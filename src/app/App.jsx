import { Provider } from "react-redux";
import { store } from "./store";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <main>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </main>
  );
}

export default App;
