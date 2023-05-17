import {useState, forwardRef} from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface IProps {
  label: string;
  id: string;
}

const PasswordInput = forwardRef<HTMLInputElement, IProps>(({label, id, ...props}, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTriggerPassword = () =>
    setIsPasswordVisible(currentValue => !currentValue);

  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        ref={ref}
        type={isPasswordVisible ? "text" : "password"}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTriggerPassword}
              edge="end"
            >
              {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )}
        label={label}
        {...props}
      />
    </>
  );
});
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;