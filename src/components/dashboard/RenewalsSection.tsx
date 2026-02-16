import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Typography,
} from "@mui/material";
import SectionCard from "../common/SectionCard";
import { renewals } from "../../data/dashboardData";

export default function RenewalsSection() {
  return (
    <SectionCard title="Renewals Management">
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#F5F7FA", // light professional grey
            }}
          >
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #E2E8F0",
              }}
            >
              Customer
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #E2E8F0",
              }}
            >
              Policy Type
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #E2E8F0",
              }}
            >
              Premium
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #E2E8F0",
              }}
            >
              Due Date
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #E2E8F0",
              }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {renewals.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                "&:hover": {
                  backgroundColor: "#FAFBFC",
                },
              }}
            >
              <TableCell>
                <Typography fontWeight={500}>{row.customer}</Typography>
                <Typography variant="caption" color="text.secondary">
                  ID: {row.id}
                </Typography>
              </TableCell>

              <TableCell>{row.type}</TableCell>
              <TableCell>{row.premium}</TableCell>
              <TableCell>{row.due}</TableCell>

              <TableCell>
                <Chip size="small" color={row.color} label={row.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionCard>
  );
}
