import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { Trail } from '../types/trail';

export default function TrailBox({ trail }: { trail: Trail }) {
  const {
    name, startLocation, endLocation, length, rating,
  } = trail;

  const ratingStr = rating >= 0 ? `+${rating}` : `-${rating}`;

  return (
    <Card sx={{ p: 3 }}>
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
