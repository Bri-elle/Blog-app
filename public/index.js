// import { response } from "express";

function showSideBar() {
	const sideBar = document.querySelector(".side-bar");

	sideBar.classList.add("show");
}

function hideSideBar() {
	const sideBar = document.querySelector(".side-bar");

	sideBar.classList.remove("show");
}

function deletePost() {
	let post = document.querySelector(".post-container");
	let id = post.dataset.postId;

	fetch(`/delete/${id}`, { method: "DELETE" });
}
