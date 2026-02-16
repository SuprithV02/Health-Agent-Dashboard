import { Box, Paper, Typography, useTheme } from "@mui/material";
import SectionCard from "../common/SectionCard";
import { pipeline } from "../../data/dashboardData";

export default function PipelineSection() {
  const theme = useTheme();

  const primaryShades = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <SectionCard title="Leads Pipeline">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
        }}
      >
        {pipeline.map((step, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              flex: 1,
              p: 2.5,
              borderRadius: 3,
              textAlign: "center",
              bgcolor: primaryShades[i % primaryShades.length],
              color: theme.palette.primary.contrastText,
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: 2,
              },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                opacity: 0.85,
                letterSpacing: 1,
                fontWeight: 500,
              }}
            >
              {step.label.toUpperCase()}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {step.value}
            </Typography>
          </Paper>
        ))}
      </Box>
    </SectionCard>
  );
}
