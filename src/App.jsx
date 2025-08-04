import { TodoBoard } from "./components/TodoBoard";
import { TodosProvider } from "./components/TodosProvider";

export function App() {
  return (
    <TodosProvider>
      <TodoBoard />
    </TodosProvider>
  );
}
