import { Input, InputColor, InputSize } from "../common/Input";
import { InputTitle } from "../common/InputTitle";

export const Label = ({
  child,
  type,
  className,
  placeholder,
  titleText,
  size,
  color,
  secondInput = false,
  ...props
}) => {
  const labelChild = (
    <Input size={size} color={color} placeholder={placeholder}></Input>
  );
  return (
    <label className={className}>
      <InputTitle>{titleText}</InputTitle>
      <div>
        <Input size={size} color={color} placeholder={placeholder}></Input>
        {secondInput && (
          <Input size={size} color={color} placeholder={placeholder}></Input>
        )}
      </div>
    </label>
  );
};
