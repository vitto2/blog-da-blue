import Button from "./Button";
import ButtonLarge from "./ButtonLarge";
import Header from "./Header";
import InputText from "./InputText";

export default function AddPost() {
	return (
		<div className="w-full">
			<Header />
			<section className="px-[1.5rem] pt-[3rem] text-[#2B2B2B]">
				<h1 className="text-[1.5rem] font-semibold pb-[1.5rem]">
					Adicionar Post
				</h1>
				<span className="block text-[14px] font-semibold pb-[.5rem] border-b-[2px] border-[#E8EDFF] mb-[1rem]">
					Informações do post
				</span>
				<div>
					<InputText
						label="Nome"
						placeholder="Insira o nome do autor"
						type="text"
					/>
					<InputText
						label="Titulo"
						placeholder="insira o titulo do post"
						type="text"
					/>
					<InputText label="Data de publicação" type="date" />
					<div>
						<label className="block font-semibold text-[.875rem] mb-[.5rem] ">
							Descrição
						</label>
						<textarea
							class="w-full border  p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-xl border-[#D7F0F6] bg-[#F6F7FB] text-[.875rem] text-[#7A8A9D] px-[1rem] py-[.75rem]"
							rows="8"
							placeholder="Digite sua descrição detalhada aqui..."></textarea>
					</div>
					<div className="flex gap-[12px] mt-[12px]">
						<ButtonLarge title="Salvar post" background={"bg-[#8C8A99]"} />
						<ButtonLarge title="Cancelar" background={"bg-[#2500FF]"} />
					</div>
				</div>
			</section>
		</div>
	);
}
