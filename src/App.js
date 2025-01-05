import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routes";

import AuthProvider from "./contexts/auth";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
