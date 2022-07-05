import './App.css';
import GameIndex from './components/weeklyGame/GameIndex';
import useAppData from './hooks/useAppData';
import { useEffect } from "react";

function App() {
  const {
    state,
    movieState,
    submitAnswer,
    objToArrConversion,
    gameOverCheck,
    focusField,
    formatAnswerArr
  } = useAppData();

  return (
    <div className="App">
      <h1 className="title">filmdle</h1>
      <GameIndex
        focusField={focusField}
        isCorrect={state.isCorrect}
        objToArrConversion={objToArrConversion}
        formatAnswerArr={formatAnswerArr}
        gameOverCheck={gameOverCheck}
        guessCount={state.guessCount}
        movieData={movieState}
        guessesArray={state.guessesArray}
        submitAnswer={submitAnswer}
        answer={state.answer}
        gameOver={state.gameOver}
        guessCounter={state.guessCount} />
      {state.gameOver || state.isCorrect ? <p className="goodbye">The movie was <strong>{state.answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")}</strong>. Please join again next week.</p> : null}
    </div>
  );
}

export default App;
