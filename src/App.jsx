import { ContextProvider } from './context/ItemContext';
import Landing from './services/Landing/Landing';

export default function App() {
  return (
    <ContextProvider>
      <Landing />
    </ContextProvider>
  );
}
