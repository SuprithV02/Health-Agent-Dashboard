import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

interface NewPolicyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NewPolicyModal({ open, onClose }: NewPolicyModalProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    policyType: "",
    premiumAmount: "",
    startDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Policy:", formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create New Policy</DialogTitle>

      <DialogContent>
        <Stack spacing={3} mt={1}>
          <TextField
            label="Customer Name"
            name="customerName"
            fullWidth
            value={formData.customerName}
            onChange={handleChange}
          />

          <TextField
            label="Policy Type"
            name="policyType"
            fullWidth
            value={formData.policyType}
            onChange={handleChange}
          />

          <TextField
            label="Premium Amount"
            name="premiumAmount"
            type="number"
            fullWidth
            value={formData.premiumAmount}
            onChange={handleChange}
          />

          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
