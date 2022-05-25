import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { DirectionsWalk } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import UploadTrailModal from './components/UploadTrailModal';
import StatisticsForm from './components/StatisticsForm';

export default function Navbar() {
  const navigate = useNavigate();

  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const handleUploadModal = (state: boolean) => setShowUploadModal(state);

  const [showStatisticsModal, setShowStatisticsModal] = useState<boolean>(false);
  const handleStatisticsModal = (state: boolean) => setShowStatisticsModal(state);

  const navigateBrowse = () => navigate('/trails');
  const navigateStatistics = () => handleStatisticsModal(true);
  const navigateCreate = () => handleUploadModal(true);

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Grid container sx={{ py: 2, px: 3, flexDirection: 'row' }}>
          <Grid item xs={6}>
            <Typography variant="h4">
              <DirectionsWalk sx={{ pr: 1 }} />
              EncounterMe
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={3}
            xs={6}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Grid item>
              <Button sx={{ color: 'white', textTransform: 'none' }} onClick={navigateBrowse}>
                <Typography variant="h6">Browse</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button sx={{ color: 'white', textTransform: 'none' }} onClick={navigateCreate}>
                <Typography variant="h6">Upload trail</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button sx={{ color: 'white', textTransform: 'none' }} onClick={navigateStatistics}>
                <Typography variant="h6">Calculate statistics</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      {showUploadModal && <UploadTrailModal open handle={handleUploadModal} />}
      {showStatisticsModal && <StatisticsForm open handle={handleStatisticsModal} />}
    </>
  );
}
