import React from "react"
import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import ReviewList from "../../components/ReviewList/ReviewList"
import ReviewForm from "../../components/ReviewForm/ReviewForm"
import { QUERY_USER, QUERY_ME } from "../../utils/queries"
import Auth from "../../utils/auth"
import { CssBaseline, Typography } from "@material-ui/core"

const Profile = () => {
  const { username: userParam } = useParams()
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  })
  const user = data?.me || data?.user || {}
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />
  }

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  if (!user?.username) {
    return (
      <>
        <CssBaseline />
        <Typography variant="h6">
          You need to be logged in to create a review. Please use the log in
          button above or sign up if you have not had an account with us!
        </Typography>
      </>
    )
  }

  return (
    <>
      <CssBaseline />
      <Typography variant="h5">
        Viewing {userParam ? `user.username}'s` : "your"} profile
      </Typography>
      {!userParam && <ReviewForm />}
      <ReviewList
        reviews={user.reviews}
        title={`${user.username}'s reviews`}
        showTitle={false}
        showUsername={false}
      />
    </>
  )
}

export default Profile
