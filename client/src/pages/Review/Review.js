import React from "react"
import { useQuery } from "@apollo/client"
import ReviewList from "../../components/ReviewList/ReviewList"
import { QUERY_REVIEWS } from "../../utils/queries"
import { CssBaseline, Typography } from "@material-ui/core"

const Review = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS)
  const user = data?.user || {}
  console.log(data)
  if (loading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <>
      <CssBaseline />
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Everyone's Reviews
      </Typography>
      <ReviewList
        reviews={data?.reviews}
      />
    </>
  )
  
}

export default Review
