import Header from "./Header";
import InputText from "./InputText";

export default function AddPost() {
	return (
		<div className="w-full">
			<Header />
			<section className="px-[1.5rem] pt-[3rem] text-[#2B2B2B]">
				<h1 className="text-[1.5rem] font-semibold pb-[1.5rem]">Adicionar Post</h1>
				<span className="block text-[14px] font-semibold pb-[1.5rem]">Informações do post</span>
				<InputText label="Nome" placeholder="Insira o nome do autor" />
			</section>
		</div>
	);
}
