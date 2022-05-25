import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrailType } from '../types/trail';

export default function TrailBox({ trail }: { trail: TrailType }) {
  const {
    name, startLocation, endLocation, length, rating, id,
  } = trail;

  const ratingStr = rating >= 0 ? `+${rating}` : `-${rating}`;

  const navigate = useNavigate();
  const navigateToTrail = () => navigate(`/trail/${id}`);

  return (
    <Card sx={{ p: 3 }} onClick={navigateToTrail}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">{ratingStr}</Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <Typography variant="body2">
              Start location:
              {' '}
              {startLocation}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              End location:
              {' '}
              {endLocation}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Length:
              {' '}
              {length}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
