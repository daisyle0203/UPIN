const User = require("../../models/User")
const mongoose = require("mongoose")

describe("User Model", () => {
  beforeEach(async () => {
    // Clear the users collection before each test
    await User.deleteMany({})
  })

  beforeAll(async () => {
    await mongoose.connect(
      "mongodb://localhost:27017/test",
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error(err)
          process.exit(1)
        }
      }
    )
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it("should hash the password before saving to the database", async () => {
    const testUser = new User({
      username: "testuser",
      email: "testuser@email.com",
      password: "password",
    })
    await testUser.save()

    expect(testUser.password).not.toBe("password")
    expect(testUser.password).toHaveLength(60)
  })

  it("should return true if the provided password is correct", async () => {
    const testUser = new User({
      username: "testuser2",
      email: "testuser2@email.com",
      password: "password",
    })
    await testUser.save()

    const passwordIsCorrect = await testUser.isCorrectPassword("password")
    expect(passwordIsCorrect).toBe(true)
  })

  it("should return false if the provided password is incorrect", async () => {
    const testUser = new User({
      username: "testuser3",
      email: "testuser3@email.com",
      password: "password",
    })
    await testUser.save()

    const passwordIsCorrect = await testUser.isCorrectPassword("wrongpassword")
    expect(passwordIsCorrect).toBe(false)
  })
})
