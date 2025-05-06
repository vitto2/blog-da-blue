import logo from "../assets/img/logo.svg";

export default function Header({ returnBtn }) {
	return (
		<header className="xl:px-[12.75rem] xl:justify-center xl:items-center flex justify-between items-center px-[1.5rem] py-[.75rem] border-b border-[#D7D7D7] font-figtree md:px-[3.12rem] ">
			<div className="w-[70.5rem]">
				<img
					className="w-[2.875rem] xl:w-[3.5625rem] object-cover"
					src={logo}
					alt="logo da blue"
				/>
				{returnBtn ? (
					<span className="text-[#7A8A9D] text-[12px] font-semibold cursor-pointer md:mr-[80%] md:text-[16px] xl:mr-[85%]">
						Voltar
					</span>
				) : (
					""
				)}
			</div>
		</header>
	);
}
