import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  align-items: center;
  color: #E5E5E5;
  display: flex;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  height: 57px;
  left: 16px;
  position: absolute;
  top: 0;
  transform-origin: 0% 0%;
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  border-bottom: 4px solid #53585D;
  border-radius: 4px;
  border-top: 4px solid transparent;
  border: 0;
  color: #F5F5F5;
  display: block;
  font-size: 18px;
  height: 57px;
  margin-bottom: 45px;
  outline: 0;
  padding: 16px 16px;
  resize: none;
  transition: border-color .3s;
  width: 100%;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;