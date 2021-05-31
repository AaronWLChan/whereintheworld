import Layout from './components/Layout';
import Routes from './Routes';
import { useSelector } from 'react-redux'

function App() {
  //Control Dark Mode from Root Div
  const darkMode = useSelector((state) => state.uiReducer.darkMode)

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : ""}>
        <Layout>
          <Routes/>
        </Layout>
    </div>
  );
}

export default App;
