export const validateEmail = (email) => {
  if (email !== "") {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
};

export const validatePassword = (password) => {
  if (password.length < 10) {
    return true;
  } else {
    return false;
  }
};
