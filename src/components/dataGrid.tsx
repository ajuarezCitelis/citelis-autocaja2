import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: '', width: 90 },
  {
    field: 'DESCRIPCION',
    headerName: 'DESCRIPCION',
    width: 620,
    editable: true,
  },
  {
    field: 'MONEY',
    headerName: '',
    type: 'number',
    width: 6,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'IMPORTE',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, DESCRIPCION: '0.90 x 500.00 SERVICIO POR 60000KM', MONEY: '$', age: '500.00' },
  { id: 2, DESCRIPCION: '1.00 x 181.03 CARTUCHO FILTRO PARA ACEITE', MONEY: '$', age: '1000.00' },
  { id: 3, DESCRIPCION: '0.69 x 500.00 REVISION DE BATERIA', MONEY: '$', age: '200.00' },

];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: '100%', width: '100%', margin:0}}>
      <DataGrid
        sx={{color:'black', textDecorationColor:'black', fontSize: '20px',fontWeight: 'bold'
        ,fontStretch:' normal'
        ,fontStyle: 'normal'
        ,lineHeight: 1.2
        ,letterSpacing: '0.3px'
        ,textAlign: 'left'}}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}