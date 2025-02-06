import React from "react";
import { Stack, Divider, Stepper, Step, StepLabel } from "@mui/material";

export const LessonStepper = () => {
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  return (
    <Stack>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Stepper alternativeLabel activeStep={1} orientation="vertical">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
