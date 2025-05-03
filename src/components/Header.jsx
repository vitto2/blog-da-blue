import logo from "../assets/img/logo.svg";

export default function Header() {
	return (
		<header className="w-full px-[1.5rem] py-[.75rem] border-b border-[#D7D7D7] font-figtree">
			<img className="w-[2.875rem] " src={logo} alt="" />
		</header>
	);
}
