import Form from "react-bootstrap/Form";
import FormGroupLayout from "./FormGroupLayout";

const Input = (props) => {
  const {
    controlId,
    label,
    type,
    placeholder,
    helpText,
    value,
    onChange,
    horizontal,
  } = props;

  return (
    <FormGroupLayout
      controlId={controlId}
      label={label}
      helpText={helpText}
      horizontal={horizontal}
    >
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormGroupLayout>
  );
};

export default Input;
