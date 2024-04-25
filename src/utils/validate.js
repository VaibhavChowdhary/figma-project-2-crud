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
    errors.push("Invalid email format");
  }
  // if (info.password?.length < 8) {
  //   errors.push("Password must be at least 8 characters long");
  // }
 
  if (!/^\d{10}$/.test(info.phone)) {
    errors.push("Invalid phone number (must be 10 digits)");
  }

  if (!info.name || info.name.trim() === "") {
    errors.push("Name cannot be empty");
  }

  if (!info.enrollNo || info.enrollNo.trim() === "") {
    errors.push("Enrollment number cannot be empty");
  }
  
  if (!new Date(info.date).getTime()) {
    errors.push("Invalid date of admission format");
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  return true;
};
