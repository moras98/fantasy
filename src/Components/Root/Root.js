import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Root(){
    const fotoUsuario = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png';
    return(
        <>
            <Header usuarioLogueado={true} fotoUsuario={fotoUsuario} nombreUsuario={'Morasito'}/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};