import React from 'react';
import { Stack, Skeleton, Box } from '@mui/material';
import { useState } from 'react';

export const LessonSkeleton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      {loading ? (
        <Skeleton width={250} height={145} animation="wave" />
      ) : (
        <img
          src="https://source.unsplash.com/random/256*144"
          alt="skeleton"
          width={250}
          height={145}
        />
      )}
    </Box>
  );
};
