import {useState} from "react"
import {getFrequente} from "../utils/functions"

function GetFrequente() {
  const [input, setInput] = useState([])
  function onChangeHandler(event) {
    const {value} = event.target
    const valueArr = value.split(",")
    console.log(valueArr)
    setInput(valueArr)
  }
  function onClickHandler() {
    document.querySelector('.result1').innerHTML = `Max frequency numbers: ${getFrequente(input)}`
  }
  return (
    <section className="getFrequenteGame">
      <h2>Get Frequente:</h2>
      <input 
        placeholder="insert array here"
        name="input"
        value={input}
        onChange={(event) => onChangeHandler(event)}
      />
      <button onClick={onClickHandler}>Get result</button>
      <div className="result1">
      </div>
    </section>
  )
}

export default GetFrequente