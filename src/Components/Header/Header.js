import './Header.css';
import React from "react";
//import logoImg from "/home/agustin/Development/ReactApps/fantasy/src/logo.svg"; // Importa la imagen del logo
const logoImg = 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F1592.png';

const Header = ({ usuarioLogueado, fotoUsuario, nombreUsuario }) => {
  return (
    <header className="header">
      {/* Logo */}
      <img src={logoImg} alt="Logo de la app" className="logo" />
      {/* Grupo de botones de navegación */}
      <nav className="nav-buttons">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Equipo</button>
        <button className="nav-button">Jugadores</button>
        <button className="nav-button">Tabla de Posiciones</button>
      </nav>
      {/* Foto de usuario y nombre, o botón de inicio de sesión */}
      {usuarioLogueado ? (
        <div className="user-info">
          <img src={fotoUsuario} alt="Foto del usuario" className="user-avatar" />
          <div className="user-name">{nombreUsuario}</div>
        </div>
      ) : (
        <button className="login-button">Iniciar Sesión</button>
      )}
    </header>
  );
};

export default Header;

