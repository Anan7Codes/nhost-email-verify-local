import '../styles/globals.css'
import { nhost } from '@/utils/nhost'
import { NhostAuthProvider } from "@nhost/react-auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <NhostAuthProvider nhost={nhost}>
        <Component {...pageProps} />
        <ToastContainer />
    </NhostAuthProvider>
  )
}

export default MyApp
