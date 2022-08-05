const MULTIPLY_DIVIDE_REGEX =
	/(?<operand1>\S+)\s*(?<operation>[\*\/])\s*(?<operand2>\S+)/

const ADD_SUBTRACT_REGEX =
	/(?<operand1>\S+)\s*(?<operation>[\+\-])\s*(?<operand2>\S+)/

const EXPONENT_REGEX =
	/(?<operand1>\S+)\s*(?<operation>[\^])\s*(?<operand2>\S+)/

export function parse(eq) {
	if (eq.includes("e")) {
		return "can't work with that big numbers"
	}
	if (eq.match(EXPONENT_REGEX)) {
		const result = handleMath(eq.match(EXPONENT_REGEX).groups)
		const newEq = eq.replace(EXPONENT_REGEX, result)
		return parse(newEq)
	} else if (eq.match(MULTIPLY_DIVIDE_REGEX)) {
		const result = handleMath(eq.match(MULTIPLY_DIVIDE_REGEX).groups)
		const newEq = eq.replace(MULTIPLY_DIVIDE_REGEX, result)
		return parse(newEq)
	} else if (eq.match(ADD_SUBTRACT_REGEX)) {
		const result = handleMath(eq.match(ADD_SUBTRACT_REGEX).groups)
		const newEq = eq.replace(ADD_SUBTRACT_REGEX, result)
		return parse(newEq)
	} else {
		if (!isNaN(eq)) return parseFloat(parseFloat(eq).toFixed(5))
		return "Please enter digits and math symbols only"
	}
}

function handleMath({ operand1, operand2, operation }) {
	const num1 = parseFloat(operand1)
	const num2 = parseFloat(operand2)

	switch (operation) {
		case "*":
			return num1 * num2
		case "/":
			return num1 / num2
		case "+":
			return num1 + num2
		case "-":
			return num1 - num2
		case "^":
			const sign = num1 < 0.00001 ? -1 : +1
			return sign * Math.abs(num1) ** num2
	}
}
