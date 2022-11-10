import {
  Alert as RawAlert,
  AlertColor,
  Snackbar,
  SnackbarOrigin,
} from "@mui/material";

type Props = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  severity?: AlertColor;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
};

export default function Alert(props: Props) {
  const { onClose, severity, isOpen, autoHideDuration, message, anchorOrigin } =
    props;

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <RawAlert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </RawAlert>
    </Snackbar>
  );
}
