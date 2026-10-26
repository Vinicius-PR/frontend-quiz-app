import {createContext, useState, type ReactNode } from 'react'
import data from '../assets/data.json'

export type SubjectProps = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility' | ''

interface QuizProps {
  title: string
  icon: string
  questions: {
    question: string
    options: string[]
    answer: string
  }[]
}

interface QuizContextProps {
  quizMode: 'idle' | 'running'
  subject: SubjectProps
  quiz: QuizProps
  totalQuestions: number
  totalRightAnswers: number

  handleSetSubject: (subject: SubjectProps) => void
  handleCheckAnswer: (selectedOption: string, answer: string) => boolean
  handleReset: () => void
}

interface QuizContextProviderProps {
  children: ReactNode
}

export const QuizContext = createContext({} as QuizContextProps)

export function QuizContextProvider({ children }:QuizContextProviderProps) {

  const [quizMode, setQuizMode] = useState<'idle' | 'running'>('idle')
  const [subject, setSubject] = useState<SubjectProps>('')
  const [quiz, setQuiz] = useState<QuizProps>({} as QuizProps)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [totalRightAnswers, setTotalRightAnswers] = useState(0)

  function handleSetSubject(subject: SubjectProps) {

    const quizData = data.quizzes.find((quiz) => {
      return quiz.title === subject
    })

    // console.log('quiz Data inside the handle set fuction: ', quizData)

    if (!quizData) {
      alert(`Subject ${subject} not found`)
      // SHOW ERROR PAGE HERE
      throw new Error('ERRO AO PROCURAR PELO SUBJECT')
    }

    console.log('quantidade de questoes', quizData.questions.length)

    setQuiz(quizData)
    setSubject(subject)
    setQuizMode('running')
    setTotalQuestions(quizData.questions.length)
  }

  function handleCheckAnswer(selectedOption: string, answer: string) {

    if (selectedOption === answer) {
      setTotalRightAnswers((current) => current + 1)
      return true
    }

    return false     
  }

  function handleReset() {
    setQuizMode('idle')
    setSubject('')
    setQuiz({} as QuizProps)
    setTotalQuestions(0)
    setTotalRightAnswers(0)
  }

  return (
    <QuizContext.Provider 
      value={{
        quiz,
        quizMode,
        subject,
        totalQuestions,
        totalRightAnswers,
        handleSetSubject,
        handleCheckAnswer,
        handleReset
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}