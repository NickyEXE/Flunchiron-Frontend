import { connect } from 'react-redux'
import { ReviewCard } from '../components'

function Reviews({reviews}){
  return <div className="reviews">
    {reviews.map(review => <ReviewCard {...review} key={review.id} />)}
  </div>
}

const mapStateToProps = (state) => ({reviews: state.selectedRestaurant.reviews})

export default connect(mapStateToProps)(Reviews)
