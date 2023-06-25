import React from "react";
import Spacer from "../src/components/spacer";

describe("Spacer", () => {
	it("renders with specified height", () => {
		const height = 20;

		const spacerElement = <Spacer height={height} />;
		expect(spacerElement.props).toEqual({ height });
	});

	it("renders with specified width", () => {
		const width = 30;

		const spacerElement = <Spacer width={width} />;
		expect(spacerElement.props).toEqual({ width });
	});

	it("renders with both height and width specified", () => {
		const height = 20;
		const width = 40;

		const spacerElement = <Spacer height={height} width={width} />;
		expect(spacerElement.props).toEqual({ height, width });
	});
});
