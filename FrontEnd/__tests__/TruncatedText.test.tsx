import React from "react";
import { render } from "@testing-library/react-native";
import TruncatedText from "../src/components/truncatedText";

describe("TruncatedText", () => {
	it("renders full text if length is less than or equal to maxLength", () => {
		const text = "This is a test";
		const maxLength = 20;
		const { getByText } = render(
			<TruncatedText text={text} maxLength={maxLength} style={{}} />
		);

		const truncatedTextElement = getByText(text);
		expect(truncatedTextElement).toBeDefined();
	});

	it("renders truncated text with ellipsis if length is greater than maxLength", () => {
		const text = "This is a longer text that needs to be truncated";
		const maxLength = 20;
		const { getByText } = render(
			<TruncatedText text={text} maxLength={maxLength} style={{}} />
		);

		const truncatedTextElement = getByText("This is a longer ...");
		expect(truncatedTextElement).toBeDefined();
	});

	it("renders with specified style", () => {
		const text = "This is a test";
		const maxLength = 20;
		const style = { fontWeight: "bold", color: "red" };
		const { getByText } = render(
			<TruncatedText text={text} maxLength={maxLength} style={style} />
		);

		const truncatedTextElement = getByText(text);
		expect(truncatedTextElement.props.style).toEqual(style);
	});
});
