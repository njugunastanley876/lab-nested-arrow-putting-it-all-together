function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    // 1. Check if already locked out (if attempts exceeded 3)
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // 2. Increment attempt count for this try
    attemptCount++;

    // 3. Check password validity
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

module.exports = { createLoginTracker };