import React, { useState, useEffect, useMemo } from 'react';
import { QUIZ_DATA } from '../constants';
import { QuizQuestion } from '../types';
import { LevelBeginnerIcon } from './icons/LevelBeginnerIcon';
import { LevelApprenticeIcon } from './icons/LevelApprenticeIcon';
import { LevelManagerIcon } from './icons/LevelManagerIcon';
import { LevelMasterIcon } from './icons/LevelMasterIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const USER_LEVELS = {
  BEGINNER: 'Principiante',
  ADVANCED: 'Aprendiz',
};

const shuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const getFinancialProfile = (score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage <= 33) {
        return {
            level: 'Principiante Financiero',
            description: '¡Estás dando tus primeros pasos! Cada pregunta es una oportunidad para aprender. Sigue así.',
            Icon: LevelBeginnerIcon,
        };
    } else if (percentage <= 66) {
        return {
            level: 'Aprendiz Atento',
            description: 'Tienes una base sólida. Estás en el camino correcto para tomar decisiones inteligentes.',
            Icon: LevelApprenticeIcon,
        };
    } else if (percentage <= 99) {
        return {
            level: 'Gestor Inteligente',
            description: '¡Excelente! Tienes un conocimiento financiero muy bueno y entiendes los conceptos clave.',
            Icon: LevelManagerIcon,
        };
    } else {
        return {
            level: 'Maestro de las Finanzas',
            description: '¡Felicidades! Tienes un dominio impresionante. Podrías dar consejos a tus amigos.',
            Icon: LevelMasterIcon,
        };
    }
};


const Quiz: React.FC = () => {
    const [userLevel, setUserLevel] = useState(USER_LEVELS.BEGINNER);
    const [leveledUp, setLeveledUp] = useState(false);
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    
    useEffect(() => {
        const savedLevel = localStorage.getItem('tuHuchaUserLevel') || USER_LEVELS.BEGINNER;
        setUserLevel(savedLevel);
        startQuiz(savedLevel);
    }, []);

    const startQuiz = (level: string) => {
        let availableQuestions = QUIZ_DATA.filter(q => {
            if (level === USER_LEVELS.ADVANCED) {
                return true; 
            }
            return q.difficulty === 'simple';
        });

        let shuffled = shuffleArray(availableQuestions);

        if (level === USER_LEVELS.BEGINNER) {
            shuffled = shuffled.slice(0, 5);
        } else {
             shuffled = shuffled.slice(0, 10); // All questions for advanced
        }


        setQuestions(shuffled);
        setAnswers(Array(shuffled.length).fill(null));
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResult(false);
        setLeveledUp(false);
        setAnswerStatus(null);
        setShowExplanation(false);
    }

    const handleAnswerClick = (answerIndex: number) => {
        if (answers[currentQuestionIndex] !== null) return; 

        const isCorrect = answerIndex === questions[currentQuestionIndex].correctAnswerIndex;
        
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setAnswers(newAnswers);
        
        setAnswerStatus(isCorrect ? 'correct' : 'incorrect');

        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        setTimeout(() => {
            setShowExplanation(true);
        }, 1200);
    };

    const resetQuestionState = () => {
        setAnswerStatus(null);
        setShowExplanation(false);
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            resetQuestionState();
        }
    };
    
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            resetQuestionState();
        }
    };
    
    const handleSubmit = () => {
        const percentage = (score / questions.length) * 100;
        if (userLevel === USER_LEVELS.BEGINNER && percentage >= 80) {
            localStorage.setItem('tuHuchaUserLevel', USER_LEVELS.ADVANCED);
            setUserLevel(USER_LEVELS.ADVANCED);
            setLeveledUp(true);
        }
        setShowResult(true);
    };

    const restartQuiz = () => {
        const currentLevel = localStorage.getItem('tuHuchaUserLevel') || USER_LEVELS.BEGINNER;
        startQuiz(currentLevel);
    };

    if (showResult) {
        const profile = getFinancialProfile(score, questions.length);
        return (
            <div className="py-20 sm:py-24 animate-fade-in-up">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white p-10 rounded-2xl shadow-lg">
                    <profile.Icon className="h-24 w-24 mx-auto text-yellow-500" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-4">{profile.level}</h2>
                     {leveledUp && (
                        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                            <p className="font-bold">¡Has subido de nivel a 'Aprendiz'!</p>
                            <p className="text-sm">Ahora tendrás acceso a preguntas más complejas. ¡Sigue así!</p>
                        </div>
                    )}
                    <p className="mt-4 text-lg text-slate-600">
                        Has acertado <span className="font-bold text-slate-800">{score}</span> de <span className="font-bold text-slate-800">{questions.length}</span> situaciones.
                    </p>
                    <p className="mt-2 max-w-md mx-auto text-slate-500">
                        {profile.description}
                    </p>
                    <button
                        onClick={restartQuiz}
                        className="mt-8 bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
                    >
                        Intentar de Nuevo
                    </button>
                </div>
            </div>
        );
    }
    
    if (questions.length === 0) {
        return null; // or a loading spinner
    }

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = answers[currentQuestionIndex];
    const progressPercentage = (score / questions.length) * 100;

    return (
        <div className="py-20 sm:py-24">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Test Financiero</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                       Pon a prueba tus conocimientos en {questions.length} situaciones. Nivel: <span className="font-bold">{userLevel}</span>.
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                        Pregunta {currentQuestionIndex + 1} de {questions.length}
                    </p>
                </div>

                <div className="mt-8">
                    <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-semibold text-slate-600">Tu Progreso</span>
                         <span className="text-sm font-bold text-green-600">Puntuación: {score}</span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-3">
                        <div
                            className="bg-green-500 h-3 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg transition-all duration-300">
                    {currentQuestion.situation && (
                        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="font-semibold text-yellow-800">Situación:</p>
                            <p className="mt-1 text-yellow-700">{currentQuestion.situation}</p>
                        </div>
                    )}
                    <h3 className="text-xl font-semibold text-slate-800 leading-relaxed">{currentQuestion.question}</h3>
                    <div className="mt-6 space-y-4">
                        {currentQuestion.options.map((option, index) => {
                            const isCorrect = index === currentQuestion.correctAnswerIndex;
                            const isSelected = selectedAnswer === index;
                            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-colors duration-300 flex items-center space-x-4 relative';
                            
                            if (selectedAnswer !== null) {
                                if(isCorrect) {
                                    buttonClass += ' bg-green-100 border-green-400 text-green-800 font-semibold';
                                } else if (isSelected) {
                                    buttonClass += ' bg-red-100 border-red-400 text-red-800';
                                } else {
                                     buttonClass += ' bg-stone-50 border-stone-200 opacity-60';
                                }
                            } else {
                                buttonClass += ' bg-stone-50 border-stone-200 hover:bg-yellow-100 hover:border-yellow-400';
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(index)}
                                    disabled={selectedAnswer !== null}
                                    className={buttonClass}
                                >
                                    {isSelected && answerStatus && (
                                        <div className={`animate-feedback absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-bold text-white rounded-full ${answerStatus === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}>
                                            {answerStatus === 'correct' ? '¡Correcto!' : 'Incorrecto'}
                                        </div>
                                    )}
                                    <span className={`flex-shrink-0 font-bold w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected || (selectedAnswer !== null && isCorrect) ? '' : 'border-slate-300'}`}>
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span>{option}</span>
                                </button>
                            );
                        })}
                    </div>
                     {showExplanation && selectedAnswer !== null && (
                        <div className="mt-6 p-4 bg-sky-50 border border-sky-200 rounded-lg animate-fade-in-up">
                            <p className="font-semibold text-sky-800">Explicación:</p>
                            <p className="mt-1 text-sky-700">{currentQuestion.explanation}</p>
                        </div>
                    )}
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="flex items-center space-x-2 px-4 py-2 rounded-full font-semibold text-slate-600 bg-white shadow-sm hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105">
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span>Anterior</span>
                    </button>

                    {currentQuestionIndex < questions.length - 1 ? (
                        <button onClick={handleNext} disabled={!showExplanation} className="flex items-center space-x-2 px-4 py-2 rounded-full font-semibold text-slate-900 bg-yellow-400 shadow-sm hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105">
                            <span>Siguiente</span>
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={handleSubmit} disabled={!showExplanation} className="px-6 py-3 rounded-full font-semibold text-white bg-green-600 shadow-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105">
                            Ver Resultados
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;