import { Options } from "./index.d";

export const mapRelative = (
	value: number,
	inputRange: [number, number],
	outputRange: number[],
	options: Options = {
		// clamp: true,
		easing: (t) => t,
	},
): number => {
	if (inputRange.length !== 2) {
		throw new Error(
			"inputRange must have 2 elements or either ascending or descending directions.",
		);
	}

	if (outputRange.length < 2) {
		throw new Error("outputRange must have 2 or more elements.");
	}

	const outputLength = outputRange.length - 1;

	const [inputA, inputB] = inputRange;
	const normalizedInput = (value - inputA) / (inputB - inputA);

	const startIndex = Math.floor(outputLength * normalizedInput) % outputLength;
	const endIndex = (Math.floor(outputLength * normalizedInput) % outputLength) + 1;

	const startValue = outputRange[startIndex];
	const endValue = outputRange[endIndex];
	const diffValue = endValue - startValue;
	const progression = options.easing((outputLength * normalizedInput) % 1);
	const outputValue = startValue + diffValue * progression;

	return outputValue;
};
