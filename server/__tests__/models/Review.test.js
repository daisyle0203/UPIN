const Review = require("../../models/Review")
const mongoose = require("mongoose")

describe("Review Model", () => {
  beforeEach(() => {
    jest.resetModules()
    require("../../models/Review")
  })

  it("should create a new review", (done) => {
    const review = new Review({
      _id: mongoose.Types.ObjectId(),
      interviewExperience: "It was a great experience.",
      reviewAuthor: "John Doe",
    })
    expect(review).toBeDefined()
    done()
  })

  it("should have a default value for createdAt", (done) => {
    const review = new Review({
      _id: mongoose.Types.ObjectId(),
      interviewExperience: "It was a great experience.",
      reviewAuthor: "John Doe",
    })
    expect(review.createdAt).toBeDefined()
    done()
  })

  it("should format the timestamp correctly with dateFormat function", (done) => {
    const review = new Review({
      interviewExperience: "It was a great experience.",
      reviewAuthor: "John Doe",
      comments: [
        {
          commentText: "The interviewer was very friendly and professional.",
          commentAuthor: "Jane Doe",
        },
      ],
    })

    expect(review.comments[0].createdAt).toMatch(
      /Jan \d{1,2}(st|nd|rd|th), \d{4} at \d{1,2}:\d{2} (am|pm)/
    )

    done()
  })

  it("should have a default value for createdAt in comments", (done) => {
    const review = new Review({
      _id: mongoose.Types.ObjectId(),
      interviewExperience: "It was a great experience.",
      reviewAuthor: "John Doe",
      comments: [
        { commentText: "Great interviewer!", commentAuthor: "Jane Doe" },
      ],
    })
    expect(review.comments[0].createdAt).toBeDefined()
    done()
  })

  it("should format the timestamp correctly in comments with dateFormat function", (done) => {
    const review = new Review({
      _id: mongoose.Types.ObjectId(),
      interviewExperience: "It was a great experience.",
      reviewAuthor: "John Doe",
      comments: [
        { commentText: "Great interviewer!", commentAuthor: "Jane Doe" },
      ],
    })
    expect(review.comments[0].createdAt).toMatch(
      /Jan \d{1,2}(st|nd|rd|th), \d{4} at \d{1,2}:\d{2} (am|pm)/
    )

    done()
  })
})
