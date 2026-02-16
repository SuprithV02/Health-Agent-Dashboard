import { Grid, Typography, Chip, Paper, Stack } from "@mui/material";
import SectionCard from "../common/SectionCard";
import { claims } from "../../data/dashboardData";

export default function ClaimsSection() {
  return (
    <SectionCard title="Recent Claims Assistance">
      <Grid container spacing={3}>
        {claims.map((claim) => (
          <Grid size={{ xs: 12, md: 4 }} key={claim.id}>
            <Paper sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography fontWeight={500}>Claim {claim.id}</Typography>

                <Chip size="small" color={claim.color} label={claim.status} />
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Customer: {claim.customer}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionCard>
  );
}
