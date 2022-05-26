import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { StatisticsType } from '../types/statistics';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

type Props = {
  data: StatisticsType;
  handle: (_: boolean) => void;
};

export default function CalculatedStatisticsModal({ handle, data }: Props) {
  return (
    <Modal open onClose={() => handle(false)} aria-labelledby="Upload a trail">
      <Box sx={style}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
          Calculated statistics
        </Typography>

        <Typography variant="h5">Your weight: {data.weight}</Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Time spent: {data.time}
        </Typography>
        <Typography variant="h5">Burnt calories: {data.calories} </Typography>
        <Typography variant="h5">Average speed: {data.speed}</Typography>
      </Box>
    </Modal>
  );
}
