export const nameValidation = name => {
  const namePattern = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  if (typeof name !== 'undefined' && namePattern.test(name)) {
    // console.log('valid name');
    return true;
  } else {
    // console.log(user);
    // console.log('invalid name');
    return false;
  }
};

export const passwordValidation = password => {
  const passPattern = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

  if (typeof password !== 'undefined' && passPattern.test(password)) {
    // console.log('valid  pass');
    return true;
  } else {
    // console.log(user);
    // console.log('invalid  pass');
    return false;
  }
};

export const emailValidation = email => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (typeof email !== 'undefined' && emailPattern.test(email)) {
    // console.log('valid user');
    return true;
  } else {
    console.log('invalid email');
    return false;
  }
};
