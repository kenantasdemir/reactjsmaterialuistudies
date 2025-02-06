import React from "react";
import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const LessonChips = () => {
  return (
    <>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />

      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />

      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />

      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
      />

      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />

      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />

      <Chip
        icon={<FaceIcon />}
        label="With Icon"
        color="primary"
        size="small"
      />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </>
  );
};
