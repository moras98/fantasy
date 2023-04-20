import './Header.css';
import React from "react";
import { NavLink } from 'react-router-dom';
//import logoImg from "/home/agustin/Development/ReactApps/fantasy/src/logo.svg"; // Importa la imagen del logo
const logoImg = 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F1592.png';

const Header = ({ usuarioLogueado, fotoUsuario, nombreUsuario }) => {
  return (
    <header className="header">
      {/* Logo */}
      <img src={logoImg} alt="Logo de la app" className="logo" />
      {/* Grupo de botones de navegación */}
      <nav className="nav-buttons">
        <NavLink className="nav-button" to="/">Inicio</NavLink>
        <NavLink className="nav-button">Equipo</NavLink>
        <NavLink className="nav-button" to="/players-list">Jugadores</NavLink>
        <NavLink className="nav-button">Tabla de Posiciones</NavLink>
      </nav>
      {/* Foto de usuario y nombre, o botón de inicio de sesión */}
      {usuarioLogueado ? (
        <div className="user-info">
          <img src={fotoUsuario} alt="Foto del usuario" className="user-avatar" />
          <div className="user-name">{nombreUsuario}</div>
        </div>
      ) : (
        <NavLink className="login-button">Iniciar Sesión</NavLink>
      )}
    </header>
  );
};

export default Header;

