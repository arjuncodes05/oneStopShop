
const rules = {
    name: [
      { required: true, message: 'Please provide a name!'},
      {minLength: 3, message: 'Too short to be a name, try something different!'}
    ], 
    email: [
      {required: true, message: 'Please provide an email!'},
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please provide a valid email!'
      }
    ],
    password: [
      {required: true, message: 'Please choose a password!'},
      {minLength: 8, message: 'Password must be atleast 8 characters long!'}
    ],
    message: [
        {required: true, message: 'Can\'t send an empty message'}
    ]
  }


export  const formValidation = (formData, setError) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      rules[key]?.some((rule) => {
        if(rule.required && !value){
          errorsData[key] = rule.message
          return true
        }

        if(rule.minLength && value.length < rule.minLength){
          errorsData[key] = rule.message
          return true
        }

        if(rule.pattern && !rule.pattern.test(value)){
          errorsData[key] = rule.message
          return true
        }
      })
    })
    setError(errorsData)
    return errorsData
  }