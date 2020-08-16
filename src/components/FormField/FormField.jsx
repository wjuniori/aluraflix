import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './FormField.styles';

const FormField = ({
  label, type, name, value, onChange,
}) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={isTextarea ? 'textarea' : 'input'}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={Boolean(value.length)}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
