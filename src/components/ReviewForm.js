import { useState } from 'react'
import { connect } from 'react-redux'
import { submitReview } from '../redux/actionCreators'

function ReviewForm({restaurantId, submitReview}){

  const [rating, setRating] = useState(5)
  const [content, setContent] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    const newReview = {rating, content}
    submitReview(newReview, restaurantId)
    setRating(5)
    setContent("")
  }

  return <form className="new_review" onSubmit={onSubmit}>
  <label>
    Rating:
    <input type="number" name="rating" min="1" max="10" onChange={(e) => setRating(e.target.value)} value={rating} />
  </label>
  <label>
    Content:
    <textarea name="content" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
  </label>
  <input type="submit" value="Submit" />
</form>
}

const mapStateToProps = (state) => ({restaurantId: state.selectedRestaurant.id})

export default connect(mapStateToProps, {submitReview})(ReviewForm)
