// InputPhone.jsx
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../styles/InputPhone.css"
import "../styles/ContactPage.css";
export interface InputPhoneProps {
  value?: string;
  onChange: (value?: string) => void;
  label?: string;
  className?: string;
  placeholder?: string;
  id?: string;
  name?: string;
}

export default function InputPhone({
  value,
  onChange,
  className,
  placeholder= "315 300 0000",
  ...props
}: InputPhoneProps) {
  const isValid = value ? isValidPhoneNumber(value) : true;

  return (
    <div className="phoneContainer">
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="CO"
        value={value}
        onChange={onChange}
        className={`${className} phoneInput ${isValid ? '' : 'invalid'}`}
        {...props}
      />
      {
        value === "" && 
        <span>{placeholder}</span>
      }
    </div>
  );
}
