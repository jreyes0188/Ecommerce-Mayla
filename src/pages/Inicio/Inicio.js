import "./Inicio.css"
import CardList from "../../components/CardList/CardList"
import Greeting from "./Greeting"

const Inicio = () => {
    return (
        <div>
            <Greeting title="Bienvenidos a Mayla Creaciones"/>         
            <CardList/>
        </div>
    )
}

export default Inicio