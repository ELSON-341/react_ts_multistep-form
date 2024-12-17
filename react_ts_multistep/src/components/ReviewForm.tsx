import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

import "./ReviewForm.css"

type ReviewForm = {
  data: {
    review: string,
    comment: string
  }
  updateFieldHandler: (key: string, value: string) => void
}

const ReviewForm = ({data, updateFieldHandler}: ReviewForm) => {
  return (
    <div className="review-form">
      <div className="from-control score-container">
        <label className="radio-conteiner">
          <input type="radio" />
        </label>
      </div>
    </div>
  )
}

export default ReviewForm