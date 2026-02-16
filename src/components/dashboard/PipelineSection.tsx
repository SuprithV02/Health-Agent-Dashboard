import { Box, Paper, Typography } from "@mui/material";
import SectionCard from "../common/SectionCard";
import { pipeline } from "../../data/dashboardData";

const agentColors = ["#2563EB", "#4F46E5", "#0D9488", "#D97706", "#059669"];

export default function PipelineSection() {
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
              flex: 1, // ← evenly distribute
              p: 2.5,
              borderRadius: 3,
              textAlign: "center",
              bgcolor: agentColors[i % agentColors.length],
              color: "#fff",
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
