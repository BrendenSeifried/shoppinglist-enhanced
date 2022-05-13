// import Header from './components/Header';
import { ContextProvider } from './context/ItemContext';
import Landing from './services/Landing/Landing';
import Header from './components/Header';

export default function App() {
  return (
    <ContextProvider>
      <Header />
      <Landing />
    </ContextProvider>
  );
}
