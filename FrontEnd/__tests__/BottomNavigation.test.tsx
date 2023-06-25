import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../src/routes";
import BottomNavigation from "../src/components/bottomNavigation/index"

// Mock das funções de navegação
const mockNavigate = jest.fn();
const mockNavigation: NativeStackNavigationProp<
	RootStackParamList,
	"Home"
> = {
	navigate: mockNavigate,
} as any;

describe("BottomNavigation", () => {
	it("navigates to Home screen on press", () => {
		const { getByTestId } = render(
			<BottomNavigation navigation={mockNavigation} />
		);

		const homeButton = getByTestId("home-button");
		fireEvent.press(homeButton);

		expect(mockNavigate).toHaveBeenCalledWith("Home");
	});

	it("navigates to MyTraining screen on press", () => {
		const { getByTestId } = render(
			<BottomNavigation navigation={mockNavigation} />
		);

		const myTrainingButton = getByTestId("my-training-button");
		fireEvent.press(myTrainingButton);

		expect(mockNavigate).toHaveBeenCalledWith("MyTraining");
	});

	it("navigates to Profile screen on press", () => {
		const { getByTestId } = render(
			<BottomNavigation navigation={mockNavigation} />
		);

		const profileButton = getByTestId("profile-button");
		fireEvent.press(profileButton);

		expect(mockNavigate).toHaveBeenCalledWith("Profile");
	});
});
