import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './FormField.styles';

const FormField = ({
  label, type, name, value, onChange, suggestions,
}) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const hasSuggestions = Boolean(suggestions.length);

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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion, index) => (
                  <option key={index} value={suggestion}>{suggestion}</option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
