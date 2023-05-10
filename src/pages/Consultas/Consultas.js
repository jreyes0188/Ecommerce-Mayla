import React, { useState } from "react";
import "./Consultas.css"

// FireBase
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

// Formulario MUI
import { TextField } from "@mui/material";

// Alerta despues de hacer la consulta
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const styles = {
    containerConsultas: {
        textAlign: "center",
        paddingTop: 20
    }
}

const initialState = {
    name: "",
    lastName: "",
    consulta: "",
}

const Consultas = () => {
    const [values, setValues] = useState(initialState)
    // Este estado esta destinado a guardar el id de la compra
    const [purchaseID, setPurchaseID] = useState("")

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, "consultas"), { 
            values,
        })
        setPurchaseID(docRef.id)
        setValues(initialState)
    }

    return (
        <div style={styles.containerConsultas}>
            <h1>Consultas</h1>
            <form className="FormContainer" onSubmit={onSubmit}>

                <TextField
                    placeholder="Name"
                    style={{ margin: 10, width: 400, background: "white" }}
                    name="name"
                    value={values.name}
                    onChange={onChange} />

                <TextField
                    placeholder="Last Name"
                    style={{ margin: 10, width: 400, background: "white" }}
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange} />

                <TextField
                    placeholder="Consulta de Compra"
                    style={{ margin: 10, width: 400, background: "white" }}
                    name="consulta"
                    value={values.consulta}
                    onChange={onChange} />

                <button className="btnASendAction" type="submit">
                    Enviar Consulta
                </button>
            </form>
            {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null} 
        </div>
    )
}

export default Consultas

