import emptySvg from "../assets/img/empty.svg";

export default function EmptyState() {
	return (
		<img
			className="mx-auto flex flex-col items-center justify-center max-w-[31.25rem]"
			src={emptySvg}
		/>
	);
}
