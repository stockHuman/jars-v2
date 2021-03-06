export function filterFloat (value) {
	if ((/^(\|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/).test(value)) {
		return Number(value)
	} else {
		return NaN
	}
}
