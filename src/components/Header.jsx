import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ returnBtn }) {
	function onReturnPostClick() {
		navigate(`/`);
	}

	const navigate = useNavigate();

	return (
		<header className="lg:px-[12.75rem] lg:justify-center lg:items-center flex justify-between items-center px-[1.5rem] py-[.75rem] border-b border-[#D7D7D7] font-figtree md:px-[3.12rem]">
			<div className="w-[70.5rem] flex justify-between items-center ">
				<img
					className="w-[2.875rem] lg:w-[3.5625rem] object-cover"
					src={logo}
					alt="logo da blue"
				/>
				{returnBtn ? (
					<span
						onClick={onReturnPostClick}
						className="text-[#7A8A9D] text-[12px] font-semibold cursor-pointer md:mr-[80%] md:text-[16px] lg:mr-[85%]">
						Voltar
					</span>
				) : (
					""
				)}
			</div>
		</header>
	);
}
