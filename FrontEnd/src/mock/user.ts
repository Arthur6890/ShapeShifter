export const TrainingFilesMocked = [
	{
		type: "Abdomen",
		exercise: "Remada fechada com TRadsadsadX",
		sets: 3,
		repetitions: 10,
		exerciseImage: "https://treinomestre.com.br/wp-content/uploads/2017/10/TRX-treino-exercicios-.jpg"
	},
	{
		type: "Peito",
		exercise: "Supinadas",
		sets: 5,
		repetitions: 15,
		exerciseImage: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg"
	},
	{
		type: "Triceps",
		exercise: "Triceps polia",
		sets: 3,
		repetitions: 10,
		exerciseImage: "https://conteudo.imguol.com.br/c/entretenimento/33/2019/11/05/triceps-pulley-1572976383678_v2_1254x837.jpg"
	},
	{
		type: "Triceps 3",
		exercise: "Triceps polia",
		sets: 3,
		repetitions: 10,
		exerciseImage: "https://conteudo.imguol.com.br/c/entretenimento/33/2019/11/05/triceps-pulley-1572976383678_v2_1254x837.jpg"
	},
]

export const TrainingSet = [
	{
		type: "superior",
		name: "A",
		trainingFiles: TrainingFilesMocked
	}
]


export const UserMocked = {
	username: "flashzin",
	password: "teste",
	name: "flash",
	email: "arthur.ramos@mail.com",
	goal: "definir",
	daysInaRowTraining: 1,
	daysInaMonthTraining: 15,
	trainingSets: TrainingSet
}

