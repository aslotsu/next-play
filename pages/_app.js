import Navbar from "../components/Navbar";
import { Poppins } from "@next/font/google"

const poppins = Poppins({weight: "600",style: ['italic'],subsets: ['latin'], fallback: ['monospace', 'sans-serif']})
const App = ({Component, pageProps}) => {
    return <main className={poppins.className}>
      <Navbar/>
      <Component {...pageProps}/>
    </main>
}
export default App