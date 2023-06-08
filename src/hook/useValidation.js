import { useState } from "react"

export default function () {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('')
  const [errorPhoneNumber, seterrorPhoneNumber] = useState('')



  function regValidation(val, type, label) {
    const regexVal = /.+@[^@]+\.[^@]{2,}$/
    const regexVal3 = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/
    const regexVal4 = /^\+374\d{8}$/


    if (!regexVal.test(val) && val != '' && type == 'email') {
      setErrorEmail('Неверный email')
    } else if (val == '' && type == 'email') {
      setErrorEmail('Введите email')
    } else if (regexVal.test(val) && type == 'email') {
      setErrorEmail('')
    }

    if (!regexVal3.test(val) && val != '' && type == 'text') {
      setErrorName('Введите имя')
    } else if (val == '' && type == 'text') {
      setErrorName('Введите имя')
    } else if (regexVal3.test(val) && type == 'text') {
      setErrorName('')
    }

    if (!regexVal4.test(val) && val != '' && type == 'tel') {
      seterrorPhoneNumber('Введите номер')
    } else if (val == '' && type == 'tel') {
      seterrorPhoneNumber('Введите номер')
    } else if (regexVal4.test(val) && type == 'tel') {
      seterrorPhoneNumber('')
    }

  }

  return {
    item: {
      func: regValidation,
      email: errorEmail,
      name: errorName,
      phoneNumber: errorPhoneNumber,
    }
  }

}