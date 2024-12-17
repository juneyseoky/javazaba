import React from "react";
import '../style/header_style.css'
import MainMenu from "./Main_Menu";
import LogoImg from "./LogoImg";

const Header = () => {
	return (
		<div className="header">
			<LogoImg />
			<MainMenu />
		</div>
	);
}

export default Header;