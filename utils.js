module.exports = {
  validateEmail(email) {
    if (email.length > 0) {
      return true;
    }
    return false;
  },

  validatePassword(password) {
    if (password.length > 0) {
      return true;
    }
    return false;
  }
};
