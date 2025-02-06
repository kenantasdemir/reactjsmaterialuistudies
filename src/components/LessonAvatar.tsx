import React from "react";
import { Stack, AvatarGroup, Avatar } from "@mui/material";

export const LessonAvatar = () => {
  return (
    <Stack direction="row" spacing={4}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: 10 }}
          src="https://randomuser.me/api/portraits/women/56.jpg"
        />
        <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
      </AvatarGroup>

      <AvatarGroup max={4}>
        <Avatar
          variant="rounded"
          sx={{
            marginRight: 10,
            bgcolor: "success.light",
            width: 50,
            height: 50,
          }}
        >
          Tuba
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};
