import { useState } from 'react';
import './App.css';


function App() {

  const questions = [
    {
      question: 'Mexico’s Dia de los Muertos, means what in English?',
      answers: [
        { text: 'Halloween' , isCorrect: false },
        { text: 'Funeral Day' , isCorrect: false },
        { text: 'Christmas Eve' , isCorrect: false },
        { text: 'Day of the Dead' , isCorrect: true }
      ]
    },
    {
      question: 'Which musical legend is Jay-Z married to?',
      answers: [
        { text: 'Madonna' , isCorrect: false },
        { text: 'Beyonce' , isCorrect: true },
        { text: 'Alicia Keys' , isCorrect: false },
        { text: 'Mary J. Blige' , isCorrect: false }
      ]
    },
    {
      question: 'What element symbol is Potassium?',
      answers: [
        { text: 'K' , isCorrect: true },
        { text: 'P' , isCorrect: false },
        { text: 'Cl' , isCorrect: false },
        { text: 'H' , isCorrect: false }
      ]
    },
    {
      question: 'The fashion designer, Gianni Versace, came from which country?',
      answers: [
        { text: 'Mexico' , isCorrect: false },
        { text: 'South Africa' , isCorrect: false },
        { text: 'Germany' , isCorrect: false },
        { text: 'Italy' , isCorrect: true }
      ]
    },
    {
      question: 'What is the name of the song that Queen Elsa sings as she builds her ice castle?',
      answers: [
        { text: 'I am Free' , isCorrect: false },
        { text: 'Cold as Ice' , isCorrect: false },
        { text: 'Let It Go' , isCorrect: true },
        { text: 'Isolation' , isCorrect: false }
      ]
    },
    {
      question: 'Which cartoon character lives in an apartment above his restaurant?',
      answers: [
        { text: 'Bob Belcher' , isCorrect: true },
        { text: 'Peter Griffin' , isCorrect: false },
        { text: 'Ice King' , isCorrect: false },
        { text: 'Mr. Krabs' , isCorrect: false }
      ]
    },
    {
      question: 'Leader and political icon Nelson Mandela was from which African country?',
      answers: [
        { text: 'Algeria' , isCorrect: false },
        { text: 'Ethiopia' , isCorrect: false },
        { text: 'Nigeria' , isCorrect: false },
        { text: 'South Africa' , isCorrect: true }
      ]
    },
    {
      question: 'Which mammal has no vocal cords?',
      answers: [
        { text: 'Hippo' , isCorrect: false },
        { text: 'Giraffe' , isCorrect: true },
        { text: 'Lion' , isCorrect: false },
        { text: 'Elephant' , isCorrect: false }
      ]
    },
    {
      question: 'Who is the group of people sworn to make a decision/deliver a verdict in court?',
      answers: [
        { text: 'Judge' , isCorrect: false },
        { text: 'Jury' , isCorrect: true },
        { text: 'Witnesses' , isCorrect: false },
        { text: 'Lawyers' , isCorrect: false }
      ]
    },
    {
      question: 'What classic video game requires you to eat all the dots throughout a maze?',
      answers: [
        { text: 'Street Fighter' , isCorrect: false }, 
        { text: 'Super Mario' , isCorrect: false }, 
        { text: 'Pac-Man' , isCorrect: true }, 
        { text: 'Tetris' , isCorrect: false }
      ]
   
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      
      setScore(score + 1)
    } 
    let nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const restart = () => {
    window.location.reload()
    return false
  }

  return (
    <div className="App">{ showScore ? 

      <div className="container results-container">
        <p className="results">You scored {score} / 10</p>
        <button className="choice" onClick={restart}>Try again?</button>
      </div> 
      
      : 

      <div className="container">
        <h1>General Knowledge Quiz</h1>
        <p className="question">{questions[currentQuestion].question}</p>
        <div className="choice-container">
          {questions[currentQuestion].answers.map((answers) => {
            return <button className="choice" onClick={() => handleAnswerClick(answers.isCorrect)}>{answers.text}</button>
          })}
        </div>
        <p className="question-count">{currentQuestion + 1}/10</p>
      </div>

    }</div>
  );
}

export default App;
