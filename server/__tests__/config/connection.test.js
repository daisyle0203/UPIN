const Connection = require("../../config/connection")
const mongoose = require("mongoose")

describe("Mongoose Connection", () => {
  beforeAll(async () => {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project3",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it("should connect to the database", () => {
    expect(mongoose.connection.readyState).toBe(1)
  })
})
