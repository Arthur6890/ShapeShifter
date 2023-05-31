import * as React from 'react'
export interface TrainingFile {
	type: string;
	exercise: string;
	sets: number;
	repetitions: number;
	exerciseImage: string;
}
export interface TrainingSet {
	type: string;
	name: string;
	trainingFiles: TrainingFile[]
}
export interface User {
	username: string;
	password: string;
	name: string;
	email: string;
	goal: string;
	daysInaRowTraining: number;
	daysInaMonthTraining: number;
	trainingSets: TrainingSet[];
}


type Action = { type: 'login', payload: User | undefined } | { type: 'logout' }
type Dispatch = (action: Action) => void
type State = { user: User | undefined }
type CountProviderProps = { children: React.ReactNode }

const CountStateContext = React.createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined)

function countReducer(state: State, action: Action) {
	switch (action.type) {
		case 'login': {
			return { user: action.payload }
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

function LoginProvider({ children }: CountProviderProps) {
	const [state, dispatch] = React.useReducer(countReducer, { user: undefined })
	// NOTE: you might need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch }
	return (
		<CountStateContext.Provider value={value}>
			{children}
		</CountStateContext.Provider>
	)
}

function useLogin() {
	const context = React.useContext(CountStateContext)
	if (context === undefined) {
		throw new Error('useLogin must be used within a CountProvider')
	}
	return context
}

export { LoginProvider, useLogin }