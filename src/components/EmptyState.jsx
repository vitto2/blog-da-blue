import emptySvg from "../assets/img/empty.svg";

export default function EmptyState() {
	return <img className="flex flex-col max-w-[31.25rem] md:mx-auto" src={emptySvg} />;
}
