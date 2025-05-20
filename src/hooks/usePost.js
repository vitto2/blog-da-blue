// src/hooks/usePosts.js
import { useState, useEffect } from "react";

export function usePosts() {
  const STORAGE_KEY = "meusPosts";
  const [posts, setPosts] = useState([]);

  // 1) Montagem: carrega do localStorage ou do JSON estático
  useEffect(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) {
      setPosts(JSON.parse(salvo));
      return;
    }

    // se não tinha nada no storage, busca e semeia
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      })
      .catch((err) => console.error("Erro ao carregar posts:", err));
  }, []);

  // 2) Sempre que `posts` mudar, atualiza o storage
  useEffect(() => {
    if (posts.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts]);

  return [posts, setPosts];
}
