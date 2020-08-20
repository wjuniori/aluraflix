import { useState } from 'react';

const useForm = (valueInitial) => {
  const [values, setValues] = useState(valueInitial);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const clearForm = () => {
    setValues(valueInitial);
  };

  return [
    values,
    handleChange,
    clearForm,
  ];
};

export default useForm;
