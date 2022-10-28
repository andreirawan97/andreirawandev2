import { Alert as RawAlert, AlertColor, Snackbar } from "@mui/material";

type Props = {
  message: string;
  isOpen?: boolean;
  onClose?: () => void;
  severity?: AlertColor;
  autoHideDuration?: number;
};

export default function Alert(props: Props) {
  const { onClose, severity, isOpen, autoHideDuration, message } = props;

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <RawAlert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </RawAlert>
    </Snackbar>
  );
}
