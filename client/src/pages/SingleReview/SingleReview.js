import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import CommentList from "../../components/CommentList/CommentList"
import CommentForm from "../../components/CommentForm/CommentForm"

import { QUERY_REVIEW } from "../../utils/queries"
import { Grid, Typography } from "@material-ui/core"

const SingleReview = () => {
  const { reviewId } = useParams()

  const { loading, data, refetch } = useQuery(QUERY_REVIEW, {
    variables: { reviewId: reviewId },
  })

  const review = data?.review || {}
  console.log(data)

  if (loading) {
    return <Typography>Loading...</Typography>
  }
  return (
    <Grid container spacing={4}>
      <Typography variant="h6">
        {review.reviewAuthor} <br />
        <Typography>had this review on {review.createdAt}</Typography>
      </Typography>
      <Grid item xs={12}>
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {review.interviewExperience}
        </blockquote>
      </Grid>
      <Grid item xs={12}>
        <CommentList comments={review.comments} />
      </Grid>
      <Grid item >
        <CommentForm reviewId={review._id} refetch={refetch} />
      </Grid>
    </Grid>
  )
}

export default SingleReview
