import axios from 'axios';
import React from 'react';
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { TrailTypePost } from '../types/trail';

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

const initialValues: TrailTypePost = {
  name: '',
  startLocation: '',
  endLocation: '',
  length: 0,
};

export default function UploadTrailModal({ open, handle }: Props) {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: TrailTypePost) => {
      axios.post('https://localhost:5001/trail/', values).then(() => {
        handle(false);
      });
    },
  });

  return (
    <Modal open={open} onClose={() => handle(false)} aria-labelledby="Upload a trail">
      <Box sx={style}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
          Upload a trail
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={2}>
            <Box>
              <Typography>Trail name</Typography>
              <TextField
                fullWidth
                size="small"
                id="name"
                name="name"
                placeholder="A beautiful long trail"
                value={formik.values.name}
                onChange={formik.handleChange}
                sx={{ mt: 1 }}
              />
            </Box>

            <Stack direction="row" spacing={2}>
              <Box>
                <Typography>Start location</Typography>
                <TextField
                  id="startLocation"
                  name="startLocation"
                  placeholder="Antakalnis"
                  size="small"
                  value={formik.values.startLocation}
                  onChange={formik.handleChange}
                  sx={{ mt: 1 }}
                />
              </Box>

              <Box>
                <Typography>End location</Typography>
                <TextField
                  fullWidth
                  id="endLocation"
                  name="endLocation"
                  placeholder="Paupys"
                  size="small"
                  value={formik.values.endLocation}
                  onChange={formik.handleChange}
                  sx={{ mt: 1 }}
                />
              </Box>
            </Stack>

            <Box>
              <Typography>Length</Typography>
              <TextField
                fullWidth
                id="length"
                name="length"
                placeholder="10000"
                size="small"
                sx={{ mt: 1 }}
                value={formik.values.length}
                onChange={formik.handleChange}
              />
            </Box>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
