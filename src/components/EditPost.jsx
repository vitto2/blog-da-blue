import React, { useState } from "react";
import Header from "./Header";
import ButtonLarge from "./ButtonLarge";

export default function EditPost({
  titulo,
  autor,
  dataPublicacao,
  descricao,
  onCancel,
  onSave,
}) {
  const [conteudo, setConteudo] = useState(descricao);

  function formatarData(d) {
    const [dia, mes, ano] = d.split("/");
    return new Date(`${ano}-${mes}-${dia}`).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header returnBtn />

      <main className="flex flex-1 flex-col px-[1.5rem] pt-[2rem] pb-8">
        <h1 className="mb-[0.75rem] text-xl font-semibold">{titulo}</h1>

        <div className="mb-[1.5rem] flex items-center gap-[0.25rem] text-xs font-normal text-blue-700">
          <h4 className="font-semibold">{autor}</h4>
          <span>•</span>
          <h4>{formatarData(dataPublicacao)}</h4>
        </div>

        <textarea
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Digite aqui…"
          className="
            flex-1 resize-none overflow-y-auto
            rounded-xl border border-[#D7F0F6] bg-[#F6F7FB] p-[1rem]
            text-[0.75rem] leading-relaxed text-[#2B2B2B]
            placeholder:text-[#7A8A9D]
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />

        <div className="mt-8 flex gap-[0.75rem]">
          <ButtonLarge
            background="bg-[#8C8A99]"
            title="Cancelar"
            onClick={onCancel}
          />
          <ButtonLarge
            background="bg-[#2500FF]"
            title="Salvar edições"
            onClick={() => onSave?.(conteudo)}
          />
        </div>
      </main>
    </div>
  );
}
