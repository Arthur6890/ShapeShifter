import React, { createContext, useState, ReactNode } from 'react';

type TrainingFiles = {
	type: string,
	exercise: string,
	sets: number,
	repetitions: number,
	exerciseImage: string

}

type UserData = {
	userName: string,
	email: string,
	name: string,
	goal: string,
	daysInaRowTraining: number,
	daysInaMonthTraining: number,
	trainingFiles: TrainingFiles[]
};

type UserContextType = {
	user: UserData | null;
	handleLogin: (userData: UserData) => void;
	handleLogout: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
	children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<UserData | null>(null);

	const handleLogin = (userData: UserData) => {
		setUser(userData);
	};

	const handleLogout = () => {
		setUser(null);
	};

	const contextValue: UserContextType = {
		user,
		handleLogin,
		handleLogout,
	};

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
