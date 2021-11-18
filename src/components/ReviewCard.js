function ReviewCard({username, rating, content}){
  return <div className="review">
    <p>{username} says: {rating} stars!</p>
    <p>{content}</p>
  </div>
}

export default ReviewCard;
