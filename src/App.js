import HtmlTag from './componenets/htmlTag';
import Navbar from "./componenets/navbar";
import Header from './componenets/header';
import Footers from './componenets/foot';
function App() {
       return(
         <div className='container'>
               <HtmlTag/>
               <Navbar/>
               <Header/>
               <Footers/>
         </div>
      )
}

export default App;