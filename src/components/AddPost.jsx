// src/components/AddPost.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePost";
import ButtonLarge from "./ButtonLarge";
import Header from "./Header";
import InputText from "./InputText";

export default function AddPost() {
	const navigate = useNavigate();
	const [allPosts, setAllPosts] = usePosts();

	const [nome, setNome] = useState("");
	const [titulo, setTitulo] = useState("");
	const [dataPub, setDataPub] = useState("");
	const [descricao, setDescricao] = useState("");

	
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	
	const today = new Date().toISOString().split("T")[0];

	function getNextId() {
		const ids = allPosts.map((p) => p.id);
		return ids.length ? Math.max(...ids) + 1 : 1;
	}

	function handleSave() {
		if (!nome || !titulo || !dataPub || !descricao) {
			setErrorMessage("Preencha todos os campos antes de salvar.");
			setShowErrorModal(true);
			return;
		}
		if (dataPub > today) {
			setErrorMessage("A data de publicação não pode ser futura.");
			setShowErrorModal(true);
			return;
		}
		const formattedDate = dataPub.split("-").reverse().join("/");
		const newPost = {
			id: getNextId(),
			nome,
			titulo,
			data_publicacao: formattedDate,
			descricao,
		};
		setAllPosts((prev) => [...prev, newPost]);

	
		setNome("");
		setTitulo("");
		setDataPub("");
		setDescricao("");

	
		setShowSuccessModal(true);
	}

	function handleCancel() {
		navigate("/");
	}

	return (
		<div className="w-full">
			<Header returnBtn />
			<section className="w-full px-[1.5rem] pt-[3rem] md:px-[3.12rem] lg:px-[12.75rem] text-[#2B2B2B]">
				<div className="w-full max-w-[70.5rem] mx-auto">
					<h1 className="text-[1.5rem] font-semibold pb-[1.5rem] md:text-[2.18rem]">
						Adicionar Post
					</h1>
					<span className="block text-[14px] font-semibold pb-[.5rem] border-b-[2px] border-[#E8EDFF] mb-[1rem] md:text-[1.5rem]">
						Informações do post
					</span>

					<div className="lg:flex justify-between gap-4">
						<InputText
							label="Nome"
							placeholder="Insira o nome do autor"
							type="text"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
						/>
						<InputText
							label="Título"
							placeholder="Insira o título do post"
							type="text"
							value={titulo}
							onChange={(e) => setTitulo(e.target.value)}
						/>
					</div>

					<InputText
						label="Data de publicação"
						type="date"
						value={dataPub}
						max={today}
						onChange={(e) => setDataPub(e.target.value)}
					/>

					<div>
						<label className="block font-semibold text-[.875rem] mb-[.5rem]">
							Descrição <span className="text-[#D32F2F] ml-1">*</span>
						</label>
						<textarea
							className="w-full border p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-xl border-[#D7F0F6] bg-[#F6F7FB] text-[.875rem] text-[#7A8A9D]"
							rows="8"
							placeholder="Digite sua descrição detalhada aqui..."
							value={descricao}
							onChange={(e) => setDescricao(e.target.value)}
						/>
					</div>

					<div className="flex gap-[12px] mt-[12px] lg:justify-end">
						<ButtonLarge
							title="Cancelar"
							background="bg-[#8C8A99]"
							onClick={handleCancel}
						/>
						<ButtonLarge
							title="Salvar post"
							background="bg-[#2500FF]"
							onClick={handleSave}
						/>
					</div>
				</div>
			</section>

			{showSuccessModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-xl p-6 max-w-sm w-full text-center">
						<h2 className="text-lg font-semibold mb-4">Post salvo!</h2>
						<p className="mb-6">Seu post foi adicionado com sucesso.</p>
						<ButtonLarge
							title="OK"
							background="bg-[#2500FF]"
							onClick={() => {
								setShowSuccessModal(false);
								navigate("/");
							}}
						/>
					</div>
				</div>
			)}

			{showErrorModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-xl p-6 max-w-sm w-full text-center">
						<h2 className="text-lg font-semibold mb-4">Erro</h2>
						<p className="mb-6">{errorMessage}</p>
						<ButtonLarge
							title="OK"
							background="bg-[#8C8A99]"
							onClick={() => setShowErrorModal(false)}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
