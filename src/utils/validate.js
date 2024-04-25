export const validateEmail = (email) => {
  if (email !== "") {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
};

export const validatePassword = (password) => {
  if (password.length > 5 && password.length < 10) {
    return true;
  } else {
    return false;
  }
};

function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

export const validateInfo = (info) => {
  const errors = [];

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
    errors.push("email error");
  }

  if (!/^\d{10}$/.test(info.phone)) {
    errors.push("phone error");
  }

  if (!info.name || info.name.trim() === "") {
    errors.push("name error");
  }

  if (!info.enrollNo || info.enrollNo.trim() === "") {
    errors.push("enrollNo error");
  }

  if (!new Date(info.date).getTime()) {
    errors.push("date error");
  }

  if (errors.length > 0) {
    throw new Error(errors);
  }

  return true;
};
