import React from "react";
import { render } from "@testing-library/react-native";
import Card from "../src/components/card";
import { Text } from "react-native";

describe("Card", () => {
	it("renders title correctly", () => {
		const title = "Card Title";
		const { getByText } = render(
			<Card title={title} spacerHeight={10}>
				<Text>Card Content</Text>
			</Card>
		);

		const titleElement = getByText(title);
		expect(titleElement).toBeDefined();
	});

	it("renders children correctly", () => {
		const { getByText } = render(
			<Card title="Card Title" spacerHeight={10}>
				<Text>Card Content</Text>
			</Card>
		);

		const contentElement = getByText("Card Content");
		expect(contentElement).toBeDefined();
	});

});
