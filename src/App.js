import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Code Coast?',
			answerOptions: [
				{ answerText: 'Noble Prince', isCorrect: false },
				{ answerText: 'Benjamin Acquah', isCorrect: true },
				{ answerText: 'Ebenezer MacPhil', isCorrect: false },
				{ answerText: 'Ebenezer Ato Acquah', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Under what age does young girls start to menstrate?',
			answerOptions: [
				{ answerText: '20', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '22', isCorrect: false },
				{ answerText: '10 - 11', isCorrect: true },
			],
		},
		{
			questionText: 'Which guy(s) in this Premest cohort do not shave their beards?',
			answerOptions: [
				{ answerText: 'Samuel Mintah & Owusu Victy', isCorrect: true },
				{ answerText: 'Remmy', isCorrect: false },
				{ answerText: 'Frederick Sombonaah', isCorrect: false },
				{ answerText: 'Livingstone Sey', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the cutest lady in this Premest cohort?',
			answerOptions: [
				{ answerText: 'Christabel Alorzuke', isCorrect: false },
				{ answerText: 'Georgina Nyamedi', isCorrect: false },
				{ answerText: 'Bernice Quansah', isCorrect: true },
				{ answerText: 'Erica Boahemaa', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the Tech Lead and Facilitator for this cohort?',
			answerOptions: [
				{ answerText: 'Noble Prince Narteh', isCorrect: true },
				{ answerText: 'Ebenezer Ato Acquah', isCorrect: false },
				{ answerText: 'Blessing Annan-Takyi', isCorrect: false },
				{ answerText: 'Ms. Blanche Micah-Davies', isCorrect: false },
			],
		},
		{
			questionText: 'ReactJs is one of the sweetest Front-end framework?',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'Somehow', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'What is my name?',
			answerOptions: [
				{ answerText: 'Jamil Huseina', isCorrect: true },
				{ answerText: 'Jamil Khadija', isCorrect: false },
				{ answerText: 'Haleema', isCorrect: false },
				{ answerText: 'Hajia', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showColor, setShowColor] = useState("neutral");

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			setShowColor("correct")
		} else if (!isCorrect) {
			setShowColor("incorrect")
		} else {
			return;
		}

		const nextQuestion = currentQuestion + 1; 
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button  className={`${showColor}`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

// 
