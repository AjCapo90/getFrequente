import {useState} from "react"
import {getFrequenti} from "../utils/functions"

function GetFrequenti() {
  const [input2, setInput2] = useState({
    arr: [],
    num: 0
  })
  function onChangeHandler(event) {
    const {name, value} = event.target
    if(name === "arr") {
      setInput2(prevInput2 => ({
        ...prevInput2,
        [name]: value.split(",")
      }))
    } else {
      setInput2(prevInput2 => ({
        ...prevInput2,
        [name]: value
      }))
    }
  }
  console.log(input2)
  function onClickHandler() {
    document.querySelector('.result2').innerHTML = `i primi ${input2.num} numeri più frequenti nell'array fornito sono: ${getFrequenti(input2.arr, input2.num)}`
  }
  return (
    <section className="getFrequenteGame">
      <h2>Get Frequenti:</h2>
      <input 
        type="text"
        placeholder="insert array here"
        name="arr"
        value={input2.arr}
        onChange={(event) => onChangeHandler(event)}
      />
      <input 
        type="number"
        placeholder="insert number here"
        name="num"
        value={input2.num}
        onChange={(event) => onChangeHandler(event)}
      />
      <button onClick={onClickHandler}>Get result</button>
      <div className="result2">
      </div>
    </section>
  )
}

export default GetFrequenti