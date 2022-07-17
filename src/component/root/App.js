import Navi from "../navi/Navi";
import Dashboard from "./DashBoard";
import '../root/App.css'

import { Container } from 'reactstrap'

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard />
    </Container>


  );
}

export default App;
