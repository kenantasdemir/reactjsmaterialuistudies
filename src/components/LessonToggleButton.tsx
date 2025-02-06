import React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const LessonToggleButton = () => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
    const [alignment, setAlignment] = React.useState<string | null>('left');


  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
    value={formats}
    exclusive
    size="small"
    orientation="vertical"
    onChange={handleAlignment}
    aria-label="text alignment"
  >
    <ToggleButton value="left" aria-label="left aligned">
      <FormatAlignLeftIcon />
    </ToggleButton>
    <ToggleButton value="center" aria-label="centered">
      <FormatAlignCenterIcon />
    </ToggleButton>
    <ToggleButton value="right" aria-label="right aligned">
      <FormatAlignRightIcon />
    </ToggleButton>
    <ToggleButton value="justify" aria-label="justified" disabled>
      <FormatAlignJustifyIcon />
    </ToggleButton>
  </ToggleButtonGroup>
  );
};
