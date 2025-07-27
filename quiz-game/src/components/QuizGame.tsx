"use client"

import { useState } from "react"
import { Button } from "./Button"
import { Question } from "./Question"
import { questions, QuestionType } from "@/data/quizQuestions"

export const QuizGame = () => {

    const [questionsQuiz, setQuestionsQuiz] = useState<QuestionType[]>(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [colorValidate, setColorValidate] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [gameOnGoing, setGameonGoing] = useState(true);
    const [progressBar, setProgressBar] = useState(1);
    const [playerAnswers, setPlayerAnswers] = useState([-1]);

    const changeQuestionNext = () => {
        setCurrentQuestion(currentQuestion + 1);
        setProgressBar(progressBar + 1);
    }

    const changeQuestionPrevius = () => {
        setCurrentQuestion(currentQuestion - 1);
        setProgressBar(progressBar - 1);
    }

    const validateQuestion = (idx: number) => {
        if (idx === questionsQuiz[currentQuestion].correctAnswer) {
            setCorrectAnswers(correctAnswers + 1)
        }

        playerAnswers.find(num => {
            if (num === idx) {
                alert("alo")
                return;
            }
            return num;
        })

        setColorValidate(true);
        setPlayerAnswers([...playerAnswers, idx])
        console.log(playerAnswers)

        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setColorValidate(false);
            setProgressBar(progressBar + 1);
            if (currentQuestion >= 4) {
                setGameonGoing(false);
            }
        }, 2000)

    }

    const restartGame = () => {
        setCurrentQuestion(0);
        setGameonGoing(true);
        setCorrectAnswers(0);
        setProgressBar(1);
        setPlayerAnswers([]);
    }

    return (
        <div className="w-screen h-screen bg-zinc-100 text-black flex justify-center items-center">
            <div className="w-full h-[3px] fixed top-0">
                <div style={{ width: `${(progressBar / questionsQuiz.length) * 100}%` }} className={`h-[3px] bg-green-600`}></div>
            </div>
            {gameOnGoing &&
                <div className="w-1/3 h-2/3 bg-gray-400/80 rounded-xl flex justify-between items-center flex-col">
                    <div className="w-full h-1/6 bg-blue-300 rounded-t-xl flex items-center px-4">
                        <h2>{questionsQuiz[currentQuestion].question}</h2>
                    </div>
                    <div className="w-full h-4/6 flex justify-evenly flex-col pl-6">
                        {questionsQuiz[currentQuestion].options.map((option, idx) =>
                            <div key={idx + 1} className={`w-5/6 h-1/5 bg-gray-200 rounded-md flex items-center p-3
                        cursor-pointer border 
                        hover:bg-gray-300
                        ${colorValidate ? questionsQuiz[currentQuestion].correctAnswer === idx ? 'border-green-500' : 'border-red-600' : ''}
                        `}
                                onClick={() => validateQuestion(idx)}
                            >
                                <Question
                                    text={option}
                                />
                            </div>
                        )}

                    </div>
                    <div className="w-full h-1/6 bg-blue-300 rounded-b-xl flex justify-end pr-10">
                        <div className="w-1/5 h-full flex gap-2 items-center">
                            {currentQuestion > 0 &&

                                <Button
                                    gameRules={changeQuestionPrevius}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </Button>
                            }
                            {currentQuestion < 4 &&
                                <Button
                                    gameRules={changeQuestionNext}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            }
            {!gameOnGoing &&
                <div>
                    <div>total de acertos: {correctAnswers} de {questionsQuiz.length}</div>
                    <Button
                        gameRules={restartGame}
                    >
                        Recomeçar Jogo
                    </Button>
                </div>
            }
        </div >
    )
}