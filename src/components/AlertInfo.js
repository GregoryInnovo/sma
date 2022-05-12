import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertInfo({severity, description}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{description ? description : "Mensaje sin incluir"}</Alert>
    </Stack>
  );
}
