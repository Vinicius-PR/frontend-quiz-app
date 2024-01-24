import { ReactNode, createContext, useState } from 'react'
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
  quizCount: number

  handleSetSubject: (subject: SubjectProps) => void
}

interface QuizContextProviderProps {
  children: ReactNode
}

export const QuizContext = createContext({} as QuizContextProps)

export function QuizContextProvider({ children }:QuizContextProviderProps) {

  const initialQuiz = {
    title: '',
    icon: '',
    question: [{
      question: '',
      options: [''],
      answer: ''
    }]
  }

  const [quizMode, setQuizMode] = useState<'idle' | 'running'>('idle')
  const [subject, setSubject] = useState<SubjectProps>('')
  const [quiz, setQuiz] = useState<QuizProps>({} as QuizProps)
  const [quizCount, setQuizCount] = useState(0)
  console.log('Quiz state: ', quiz)

  function handleSetSubject(subject: SubjectProps) {
    setSubject(subject)
    setQuizMode('running')

    const quizData = data.quizzes.filter((quiz) => {
      return quiz.title === subject
    })
    setQuiz(quizData[0])
  }

  // function setDataSubject() {
  //   const question = data.quizzes.filter((quiz) => {
  //     return quiz.title === sub
  //   })
  // }

  return (
    <QuizContext.Provider 
      value={{
        quiz,
        quizMode,
        subject,
        quizCount,
        handleSetSubject
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}