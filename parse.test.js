import { parse } from "./parse.js"

describe("#parse", () => {
	describe("plus", () => {
		describe("integer values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3 + 1")).toBe(4)
					expect(parse("0 + 1")).toBe(1)
					expect(parse("1 + 0")).toBe(1)
					expect(parse("9 + 1")).toBe(10)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 + 33")).toBe(38)
					expect(parse("33 + 5")).toBe(38)
					expect(parse("10 + 20")).toBe(30)
					expect(parse("111 + 222")).toBe(333)
					expect(parse("01 + 23")).toBe(24)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3 + 1")).toBe(-2)
					expect(parse("-0 + 1")).toBe(1)
					expect(parse("-1 + 0")).toBe(-1)
					expect(parse("-9 + 1")).toBe(-8)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5 + 33")).toBe(28)
					expect(parse("-33 + 5")).toBe(-28)
					expect(parse("-10 + 20")).toBe(10)
					expect(parse("-111 + 222")).toBe(111)
					expect(parse("-01 + 23")).toBe(22)
				})
			})
		})
		describe("float values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3.0 + 1")).toBe(4)
					expect(parse("0.1 + 1")).toBe(1.1)
					expect(parse("1 + 0.4")).toBe(1.4)
					expect(parse("9 + 1.3")).toBe(10.3)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 + 33.44")).toBe(38.44)
					expect(parse("33.132 + 5")).toBe(38.132)
					expect(parse("10 + 20.999")).toBe(30.999)
					expect(parse("111 + 222.99999")).toBe(333.99999)
					expect(parse("01.23 + 23")).toBe(24.23)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3.0 + 1")).toBe(-2)
					expect(parse("-0.1 + 1")).toBe(0.9)
					expect(parse("-1.2 + 0")).toBe(-1.2)
					expect(parse("-9.4 + 1")).toBe(-8.4)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5.123 + 33")).toBe(27.877)
					expect(parse("-33.444 + 5")).toBe(-28.444)
					expect(parse("-10.00001 + 20")).toBe(9.99999)
					expect(parse("-111.90001 + 222")).toBe(110.09999)
					expect(parse("-01 + 23.0123")).toBe(22.0123)
				})
			})
		})
	})
	describe("multiply", () => {
		describe("integer values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3 * 1")).toBe(3)
					expect(parse("0 * 1")).toBe(0)
					expect(parse("1 * 0")).toBe(0)
					expect(parse("9 * 1")).toBe(9)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 * 33")).toBe(165)
					expect(parse("33 * 5")).toBe(165)
					expect(parse("10 * 20")).toBe(200)
					expect(parse("111 * 222")).toBe(24642)
					expect(parse("01 * 23")).toBe(23)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3 * 1")).toBe(-3)
					expect(parse("-0 * 1")).toBe(0)
					expect(parse("-1 * 0")).toBe(0)
					expect(parse("-9 * 1")).toBe(-9)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5 * 33")).toBe(-165)
					expect(parse("-33 * 5")).toBe(-165)
					expect(parse("-10 * 20")).toBe(-200)
					expect(parse("-111 * 222")).toBe(-24642)
					expect(parse("-01 * 23")).toBe(-23)
				})
			})
		})
		describe("float values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3.0 * 1")).toBe(3)
					expect(parse("0.1 * 1")).toBe(0.1)
					expect(parse("1 * 0.4")).toBe(0.4)
					expect(parse("9 * 1.3")).toBe(11.7)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 * 33.44")).toBe(167.2)
					expect(parse("33.132 * 5")).toBe(165.66)
					expect(parse("10 * 20.999")).toBe(209.99)
					expect(parse("111 * 222.99999")).toBe(24752.99889)
					expect(parse("01.23 * 23")).toBe(28.29)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3.0 * 1")).toBe(-3)
					expect(parse("-0.1 * 1")).toBe(-0.1)
					expect(parse("-1.2 * 0")).toBe(0)
					expect(parse("-9.4 * 1")).toBe(-9.4)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5.123 * 33")).toBe(-169.059)
					expect(parse("-33.444 * 5")).toBe(-167.22)
					expect(parse("-10.00001 * 20")).toBe(-200.0002)
					expect(parse("-111.90001 * 222")).toBe(-24841.80222)
					expect(parse("-01 * 23.0123")).toBe(-23.0123)
				})
			})
		})
	})
	describe("divide", () => {
		describe("integer values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3 / 1")).toBe(3)
					expect(parse("0 / 1")).toBe(0)
					expect(parse("1 / 0")).toBe(Infinity)
					expect(parse("9 / 1")).toBe(9)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 / 33")).toBe(0.15152)
					expect(parse("33 / 5")).toBe(6.6)
					expect(parse("10 / 20")).toBe(0.5)
					expect(parse("111 / 222")).toBe(0.5)
					expect(parse("01 / 23")).toBe(0.04348)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3 / 1")).toBe(-3)
					expect(parse("-0 / 1")).toBe(0)
					expect(parse("-1 / 0")).toBe(-Infinity)
					expect(parse("-9 / 1")).toBe(-9)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5 / 33")).toBe(-0.15152)
					expect(parse("-33 / 5")).toBe(-6.6)
					expect(parse("-10 / 20")).toBe(-0.5)
					expect(parse("-111 / 222")).toBe(-0.5)
					expect(parse("-01 / 23")).toBe(-0.04348)
				})
			})
		})
		describe("float values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3.0 / 1")).toBe(3)
					expect(parse("0.1 / 1")).toBe(0.1)
					expect(parse("1 / 0.4")).toBe(2.5)
					expect(parse("9 / 1.3")).toBe(6.92308)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 / 33.44")).toBe(0.14952)
					expect(parse("33.132 / 5")).toBe(6.6264)
					expect(parse("10 / 20.999")).toBe(0.47621)
					expect(parse("111 / 222.99999")).toBe(0.49776)
					expect(parse("01.23 / 23")).toBe(0.05348)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3.0 / 1")).toBe(-3)
					expect(parse("-0.1 / 1")).toBe(-0.1)
					expect(parse("-1.2 / 0")).toBe(-Infinity)
					expect(parse("-9.4 / 1")).toBe(-9.4)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5.123 / 33")).toBe(-0.15524)
					expect(parse("-33.444 / 5")).toBe(-6.6888)
					expect(parse("-10.00001 / 20")).toBe(-0.5)
					expect(parse("-111.90001 / 222")).toBe(-0.50405)
					expect(parse("-01 / 23.0123")).toBe(-0.04346)
				})
			})
		})
	})
	describe("exponent", () => {
		describe("integer values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3 ^ 1")).toBe(3)
					expect(parse("0 ^ 1")).toBe(0)
					expect(parse("1 ^ 0")).toBe(1)
					expect(parse("9 ^ 1")).toBe(9)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 ^ 33")).toBe("can't work with that big numbers")
					expect(parse("33 ^ 5")).toBe(39135393)
					expect(parse("10 ^ 20")).toBe(100000000000000000000)
					expect(parse("111 ^ 222")).toBe(Infinity)
					expect(parse("01 ^ 23")).toBe(1)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3 ^ 1")).toBe(-3)
					expect(parse("-0 ^ 1")).toBe(0)
					expect(parse("-1 ^ 0")).toBe(-1)
					expect(parse("-9 ^ 1")).toBe(-9)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5 ^ 33")).toBe("can't work with that big numbers")
					expect(parse("-33 ^ 5")).toBe(-39135393)
					expect(parse("-10 ^ 20")).toBe(-100000000000000000000)
					expect(parse("-111 ^ 222")).toBe(-Infinity)
					expect(parse("-01 ^ 23")).toBe(-1)
				})
			})
		})
		describe("float values", () => {
			describe("both positive", () => {
				test("single digited numbers", () => {
					expect(parse("3.0 ^ 1")).toBe(3)
					expect(parse("0.1 ^ 1")).toBe(0.1)
					expect(parse("1 ^ 0.4")).toBe(1)
					expect(parse("9 ^ 1.3")).toBe(17.39864)
				})
				test("multiple digited numbers", () => {
					expect(parse("5 ^ 33.44")).toBe("can't work with that big numbers")
					expect(parse("33.132 ^ 5")).toBe(39924387.61966)
					expect(parse("10 ^ 20.999")).toBe(997700063822550500000)
					expect(parse("111 ^ 222.99999")).toBe(Infinity)
					expect(parse("01.23 ^ 23")).toBe(116.90082)
				})
			})
			describe("negative & positive", () => {
				test("single digited numbers", () => {
					expect(parse("-3.0 ^ 1")).toBe(-3)
					expect(parse("-0.1 ^ 1")).toBe(-0.1)
					expect(parse("-1.2 ^ 0")).toBe(-1)
					expect(parse("-9.4 ^ 1")).toBe(-9.4)
				})
				test("multiple digited numbers", () => {
					expect(parse("-5.123 ^ 33")).toBe("can't work with that big numbers")
					expect(parse("-33.444 ^ 5")).toBe(-41839941.99801)
					expect(parse("-10.00001 ^ 20")).toBe(-100002000019000030000)
					expect(parse("-111.90001 ^ 222")).toBe(-Infinity)
					expect(parse("-01 ^ 23.0123")).toBe(-1)
				})
			})
		})
	})

	describe("not a number", () => {
		test("only letters", () => {
			expect(parse("abc * fd")).toBe(
				"Please enter digits and math symbols only"
			)
			expect(parse("abc / fd")).toBe(
				"Please enter digits and math symbols only"
			)
			expect(parse("abc + fd")).toBe(
				"Please enter digits and math symbols only"
			)
			expect(parse("abc - ffsd")).toBe(
				"Please enter digits and math symbols only"
			)
		})
		test("letters & digits", () => {
			expect(parse("abc * 0")).toBe("Please enter digits and math symbols only")
			expect(parse("0 / fd")).toBe("Please enter digits and math symbols only")
			expect(parse("0 + fd")).toBe("Please enter digits and math symbols only")
			expect(parse("123 - ffsd")).toBe(
				"Please enter digits and math symbols only"
			)
		})
	})
})
