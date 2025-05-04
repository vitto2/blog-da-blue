import logo from "../assets/img/logo.svg";

export default function Header({returnBtn}) {
	return (
		<header className="flex justify-between items-center px-[24px] w-full py-[.75rem] border-b border-[#D7D7D7] font-figtree">
			<img className="w-[2.875rem] " src={logo} alt="" />
			{returnBtn ? <span className="text-[#7A8A9D] text-[12px] font-semibold cursor-pointer">Voltar</span> : ""}
		</header>
	);
}
