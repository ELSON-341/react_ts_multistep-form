// Components
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import UserForm from './components/UserForm'
import Steps from './components/Steps'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

// Hooks
import { UseForm } from './hooks/useForm'
import { useState } from 'react'

// CSS
import './App.css'

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formTeplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: ""

}

function App() {
  const [data, setData] = useState(formTeplate)

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const formComponent = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks />
  ]

  const { currentStep, currentComponent, changeSteps, isLastStep } = UseForm(formComponent)

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeSteps(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type='button' onClick={() => changeSteps(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (<button type='submit'>
              <span>avançar</span>
              <GrFormNext />
            </button>) : (<button type='button'>
              <span>Enviar</span>
              <FiSend />
            </button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
