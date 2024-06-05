import { CardForm } from "./CardForm";
import { Navbar } from "./Navbar";

function App() {
return (
  <div >
    <Navbar />
    <br />
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap">
        <CardForm title="Material UI"/>
        <CardForm title="CARD number 2"/>
        <CardForm title="CARD 3"/>
        <CardForm title="CARD 4"/>
      </div>
    </div>
  </div>
  )
}

export default App;
