import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface NewPolicyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NewPolicyModal({ open, onClose }: NewPolicyModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [policyType, setPolicyType] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);

  const handleSubmit = () => {
    console.log({
      customerName,
      policyType,
      premiumAmount,
      startDate: startDate ? startDate.format("YYYY-MM-DD") : null,
    });

    onClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Create New Policy</DialogTitle>

        <DialogContent>
          <Stack spacing={3} mt={1}>
            <TextField
              label="Customer Name"
              fullWidth
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel>Policy Type</InputLabel>
              <Select
                value={policyType}
                label="Policy Type"
                onChange={(e) => setPolicyType(e.target.value)}
              >
                <MenuItem value="Individual PPO">Individual PPO</MenuItem>
                <MenuItem value="Family HMO">Family HMO</MenuItem>
                <MenuItem value="Medicare Advantage">
                  Medicare Advantage
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Premium Amount"
              type="number"
              fullWidth
              value={premiumAmount}
              onChange={(e) => setPremiumAmount(e.target.value)}
            />

            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slotProps={{
                textField: { fullWidth: true },
              }}
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
    </LocalizationProvider>
  );
}
