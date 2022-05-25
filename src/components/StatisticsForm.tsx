import axios from 'axios';
import React, { useState } from 'react';
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { StatisticsType, StatisticsTypeGet } from '../types/statistics';
import CalculatedStatisticsModal from './CalculatedStatisticsModal';

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
  open: boolean;
  handle: (_: boolean) => void;
};

const initialValues: StatisticsTypeGet = {
  trailId: '',
  weight: 0,
  time: 0,
};

export default function StatisticsForm({ open, handle }: Props) {
  const [stats, setStats] = useState<StatisticsType>({ calories: 0, weight: 0, time: 0, speed: 0 });

  const [showCalculatedStatisticsModal, setShowCalculatedStatisticsModal] = useState(false);
  const handleCalculatedStatisticsModal = (state: boolean) => setShowCalculatedStatisticsModal(state);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values: StatisticsTypeGet) => {
      const response = await axios.get('https://localhost:5001/statistics/', {
        params: { trailId: values.trailId, weight: values.weight, time: values.time },
      });

      setStats(response.data);
      handleCalculatedStatisticsModal(true);
    },
  });

  return (
    <>
      {showCalculatedStatisticsModal && (
        <CalculatedStatisticsModal handle={handleCalculatedStatisticsModal} data={stats} />
      )}
      <Modal open={open} onClose={() => handle(false)} aria-labelledby="Upload a trail">
        <Box sx={style}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Calculate statistics
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={2}>
              <Box>
                <Typography>Trail Id</Typography>
                <TextField
                  fullWidth
                  size="small"
                  id="trailId"
                  name="trailId"
                  value={formik.values.trailId}
                  onChange={formik.handleChange}
                  sx={{ mt: 1 }}
                />
              </Box>

              <Stack direction="row" spacing={2}>
                <Box>
                  <Typography>Time taken</Typography>
                  <TextField
                    id="time"
                    name="time"
                    size="small"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    sx={{ mt: 1 }}
                  />
                </Box>

                <Box>
                  <Typography>Your weight</Typography>
                  <TextField
                    fullWidth
                    id="weight"
                    name="weight"
                    size="small"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    sx={{ mt: 1 }}
                  />
                </Box>
              </Stack>

              <Button variant="contained" type="submit">
                Calculate
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
}
