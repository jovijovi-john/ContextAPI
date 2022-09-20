import Alunos from "./components/Alunos";
import UserProvider from "./contexts/user";

function App() {

  return(
    <UserProvider>
      <div>
        <h1>Escola</h1>
      </div>

      <Alunos/>
    </UserProvider>
  )
}

export default App;
