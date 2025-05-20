// src/components/AddPost.jsx
import { useState } from "react";
import { usePosts } from "../hooks/usePost";
import ButtonLarge from "./ButtonLarge";
import Header from "./Header";
import InputText from "./InputText";

export default function AddPost() {
  // 1) hook para ler/escrever no localStorage
  const [allPosts, setAllPosts] = usePosts();          // :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}

  // 2) estados controlados para cada campo
  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [dataPub, setDataPub] = useState("");
  const [descricao, setDescricao] = useState("");

  // 3) função auxiliar para pegar o próximo ID
  function getNextId() {
    const ids = allPosts.map(p => p.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
  }

  // 4) salvar novo post
  function handleSave() {
    // validação simples
    if (!nome || !titulo || !dataPub || !descricao) {
      alert("Preencha todos os campos antes de salvar.");
      return;
    }

    // formata a data YYYY-MM-DD → DD/MM/YYYY
    const formattedDate = dataPub.split("-").reverse().join("/");

    const newPost = {
      id: getNextId(),
      nome,
      titulo,
      data_publicacao: formattedDate,
      descricao,
    };

    // adiciona e persiste em localStorage
    setAllPosts(prev => [...prev, newPost]);

    // limpa o form
    setNome("");
    setTitulo("");
    setDataPub("");
    setDescricao("");

    alert("Post salvo com sucesso!");
  }

  // 5) (opcional) cancelar
  function handleCancel() {
    setNome("");
    setTitulo("");
    setDataPub("");
    setDescricao("");
  }

  return (
    <div className="w-full">
      <Header returnBtn />

      <section className="w-full px-[1.5rem] pt-[3rem] md:px-[3.12rem] xl:px-[12.75rem] text-[#2B2B2B]">
        <div className="w-full max-w-[70.5rem] mx-auto">
          <h1 className="text-[1.5rem] font-semibold pb-[1.5rem] md:text-[2.18rem]">
            Adicionar Post
          </h1>
          <span className="block text-[14px] font-semibold pb-[.5rem] border-b-[2px] border-[#E8EDFF] mb-[1rem] md:text-[1.5rem]">
            Informações do post
          </span>

          {/* Campos controlados */}
          <div className="xl:flex justify-between gap-4">
            <InputText
              label="Nome"
              placeholder="Insira o nome do autor"
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <InputText
              label="Título"
              placeholder="Insira o título do post"
              type="text"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
          </div>

          <InputText
            label="Data de publicação"
            type="date"
            value={dataPub}
            onChange={e => setDataPub(e.target.value)}
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
              onChange={e => setDescricao(e.target.value)}
            />
          </div>

          {/* Botões Cancelar / Salvar */}
          <div className="flex gap-[12px] mt-[12px] xl:justify-end">
            <ButtonLarge 
              title="Cancelar" 
              background="bg-[#8C8A99]" 
              onClick={handleCancel}     // :contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}
            />
            <ButtonLarge 
              title="Salvar post" 
              background="bg-[#2500FF]" 
              onClick={handleSave}       // :contentReference[oaicite:8]{index=8}:contentReference[oaicite:9]{index=9}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
