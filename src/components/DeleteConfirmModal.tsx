import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  Typography,
} from "@mui/material";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
}: DeleteConfirmModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ p: 2 }}>
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: 2, pb: 2 }}
      >
        <Button onClick={onConfirm} variant="contained" color="error">
          Delete
        </Button>
        <Button onClick={onClose} variant="outlined" color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmModal;
