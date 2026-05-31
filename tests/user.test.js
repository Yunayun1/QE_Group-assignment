describe("User Logic Tests", () => {

  test("valid email should contain @", () => {
    const email = "channa@gmail.com";
    expect(email.includes("@")).toBe(true);
  });

  test("invalid email should fail validation", () => {
    const email = "channagmail.com";
    expect(email.includes("@")).toBe(false);
  });

  test("password should not be empty", () => {
    const password = "123456";
    expect(password.length > 0).toBe(true);
  });

  test("weak password should be detected", () => {
    const password = "123";
    expect(password.length < 6).toBe(true);
  });

  test("login object should contain email and password", () => {
    const user = { email: "channa@gmail.com", password: "123456" };
    expect(user.email && user.password).toBeTruthy();
  });

});