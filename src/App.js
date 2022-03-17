import { Provider } from "react-redux";
import { store } from "./redux-store";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
