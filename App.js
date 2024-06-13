import React from 'react';
import './App.css';
import Questions from './Quistion';

function App() {
  const faa = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
  const faa1 = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
  const faa2 = [[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]]
  const [startGame, setStartGame] = React.useState(false)
  const [active, setActice] = React.useState([false, false, false, false, false])
  const [trueAnswer, setTrueAnswer] = React.useState(faa)
  // const [correctAnswer, setCorrectAnswer] = React.useState([])
  const [correctAnswer, setCorrectAnswer] = React.useState([])
  const [data, setData] = React.useState([])
  const [showResult, setShowResult] = React.useState(false)
  const [finalScore, setFinalScore] = React.useState(0)
  const [final, setFinal] = React.useState(false)
  const [green, setGreen] = React.useState(faa1)
  const [red, setRed] = React.useState(faa2)
  const [stop, setStop] = React.useState(false)
  const [play ,setPlay] = React.useState(0)
  // fetch data and get the correct answers
  React.useEffect(
    function api() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then(data => data.json())
      .then(res => { setData(() => [res[0], res[1], res[2], res[3], res[4]]); setCorrectAnswer([res[0].correctAnswer, res[1].correctAnswer, res[2].correctAnswer, res[3].correctAnswer, res[4].correctAnswer])})
    }, [startGame, play])
  // console.log(data)
  // console.log(correctAnswer)
  // console.log(trueAnswer)
  function startQuiz() {
    setStartGame(true)
  }

  // main function for choose the selected element to be active and the final result of the quiz 
  function showValue(event, index) {
    if (!stop) {
      let arr = trueAnswer
    let sec = []
    for (let i = 0; i < trueAnswer[index].length; i++) {
      if (event.target.id == i) {
        for (let i = 0; i < trueAnswer[index].length; i++) {
          if (event.target.id != i) {
            arr[index][i] = false
          }
        }
        let fin = [...arr, arr[index][i] = !arr[index][i]]
        fin.length = 5
        sec = fin
      } 
    } 
    setTrueAnswer(() => sec)
    // final result of the quiz 
    if (correctAnswer[index].includes(event.target.textContent)) {
      let activArr = active
      let pla = activArr
      pla[index] = !pla[index]
      pla.length = 5
      setActice(pla)
    }
    // green ansawer
    if (event.target.textContent === correctAnswer[index]) {
      let zz = green
      let se = []
      for (let i = 0; i < green[index].length; i++) {
        if (event.target.id == i) {
          for (let i = 0; i < green[index].length; i++) {
            if (event.target.id != i) {
              zz[index][i] = false
            }
          }
          let zagal = [...zz, zz[index][i] = !zz[index][i]]
          zagal.length = 5
          se = zagal
        }
      }
      setGreen(se)
    }

    // red Answer :-
  
    if (event.target.textContent != correctAnswer[index]) {
      let zz1 = red
      let se1 = []
      for (let i = 0; i < red[index].length; i++) {
        if (event.target.id == i) {
          for (let i = 0; i < red[index].length; i++) {
            if (event.target.id != i) {
              zz1[index][i] = false
            }
          }
          let zagal = [...zz1, zz1[index][i] = !zz1[index][i]]
          zagal.length = 5
          se1 = zagal
        }
      }
      setRed(se1)
    }


    }
    
  } 
  console.log(green)
  function chekTheAnswers() {
    let final = active.reduce((prev, curr) => {
      return prev + curr
    })
    setFinalScore(() => final)
    setShowResult((pre) => !pre)
    setFinal((pre) => !pre)
    setStop((pre) => !pre)
  }

  function playAgain() {
    setPlay(prev => { return prev += 1 })
    setGreen(faa1)
    setRed(faa2)
    setShowResult((pre) => !pre)
    setFinal((pre) => !pre)
    setStop((pre) => !pre)
    setTrueAnswer(faa)
    setFinalScore(0)
    setActice([false, false, false, false, false])
  }

  console.log(active)
  const result = data.map((ele, index) => {
    // console.log(trueAnswer[index])/
    return <Questions question={ele.question.text} allAnswers={[ele.correctAnswer, ...ele.incorrectAnswers]} trueAnswer={trueAnswer[index]} showValue={(event) => { showValue(event, index) }} final={final} red={red[index]} green={green[index]} stop={stop}  />
  })
  return (
    <>
      {startGame ?
        <div className='container-2'>
          {result}

          {/* <Questions trueAnswer={trueAnswer[0]} showValue={(event) => { showValue(event, 0) }} final={final} red={red[0]} green={green[0]} />
          
          <Questions trueAnswer={trueAnswer[1]} showValue={(event) => { showValue(event, 1) }} final={final} red={red[1]} green={green[1]} />
          
          <Questions trueAnswer={trueAnswer[2]} showValue={(event) => { showValue(event, 2) }} final={final} red={red[2]} green={green[2]} />
          
          <Questions trueAnswer={trueAnswer[3]} showValue={(event) => { showValue(event, 3) }} final={final} red={red[3]} green={green[3]} /> */}
          
          {showResult
            ?
            <>
              <div className='score'>You Scored {finalScore}/{correctAnswer.length} Correct Answers</div>
            <button className='check again' onClick={playAgain} >Play Again</button>
            </>
            : <button className='check' onClick={chekTheAnswers}>Check answers</button>}
        </div>
        :
        <div className='container-1'>
          <div className='quiz'>Quizzical</div>
          <div className='description'>Simple quiz with easy usage try it now</div>
          <button className='btn-1' onClick={() => startQuiz()}>Start quiz</button>
      </div>
      }
    </>
  )
}

export default App;