import { ReactElement } from "react"

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./Thanks.css"

type ThanksProps = {
  data: {
    name: string,
    review: string,
    comment: string
  }
}

type emojiObject = {
  unsatisfied: ReactElement,
  neutral: ReactElement,
  satisfied: ReactElement,
  very_satisfied: ReactElement
}

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({data}: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>falta pouco...</h2>
      <p>
        A sua opiniaõ é mauito importante, em  breve você receberá um cupom de 10%
        de desconto para a sua proxíma compra.
      </p>
      <p>Para concluir sua avaliação clique no botão abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisveito com o produto:</span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comentário:</span> {data.comment}
      </p>
    </div>
  )
}

export default Thanks