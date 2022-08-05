const input = document.querySelector("input")
const answerField = document.querySelector("#answer")
const solveButton = document.querySelector("button")

import { parse } from "./parse.js"

solveButton.addEventListener("click", (e) => {
	const equation = input.value
	const result = parse(equation)
	answerField.textContent = result
})
