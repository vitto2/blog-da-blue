// src/hooks/usePosts.js
import { useState, useEffect } from "react";


export function usePosts() {
	const STORAGE_KEY = "meusPosts";
	const [posts, setPosts] = useState([]);

	
	useEffect(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			
			setPosts(JSON.parse(saved));
		} else {
			
			fetch("/postsMock.json")
				.then((res) => res.json())
				.then((data) => {
					setPosts(data);
					localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
				})
				.catch((err) => console.error("Erro ao carregar mock:", err));
		}
	}, []);

	useEffect(() => {
		if (posts.length) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
		}
	}, [posts]);

	return [posts, setPosts];
}
