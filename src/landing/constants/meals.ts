import Akara from '../assets/images/akara.png';
import Agidi from '../assets/images/agidi.png';
import Coconut from '../assets/images/coconut.png';
import Toast from '../assets/images/toast-bread.png';

export const mealsList = [
	{
		category: 'breakfast',
		meals: [
			{
				name: 'Toasted bread with boiled egg and tea',
				calories: 220,
				fat: 4.3,
				protein: 8.2,
				image: Toast,
			},
			{
				name: 'Coconut Sauce (gravy) with Chicken & Vegetables',
				calories: 245,
				fat: 2.3,
				protein: 8.2,
				image: Coconut,
			},
			{
				name: 'Agidi (Eko) : Serve with akara or a light soup.',
				calories: 320,
				fat: 1.3,
				protein: 8.2,
				image: Agidi,
			},
			{
				name: 'Akara : Serve with pap/ogi or custard.',
				calories: 120,
				fat: 2.3,
				protein: 6.2,
				image: Akara,
			},
		],
	},
	{
		category: 'lunch',
		meals: [
			{
				name: 'Toasted bread with boiled egg and tea',
				calories: 220,
				fat: 4.3,
				protein: 8.2,
				image: Agidi,
			},
		],
	},
	{
		category: 'dinner',
		meals: [
			{
				name: 'Toasted bread with boiled egg and tea',
				calories: 220,
				fat: 4.3,
				protein: 8.2,
				image: Toast,
			},
		],
	},
	{
		category: 'drinks',
		meals: [
			{
				name: 'Agidi (Eko) : Serve with akara or a light soup.',
				calories: 220,
				fat: 4.3,
				protein: 8.2,
				image: Agidi,
			},
		],
	},
];
