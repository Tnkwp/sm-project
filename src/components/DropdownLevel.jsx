import { useState, useEffect } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownLevel() {
  const [level, setLevel] = useState('');

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  useEffect(() => {
    console.log('Component mounted or updated');
  }, []);

  return (
    <>
     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={level}
        label="Select Level"
        onChange={handleChange}
      >
        <MenuItem value={1}>Silver</MenuItem>
        <MenuItem value={2}>Gold</MenuItem>
        <MenuItem value={3}>Platinum</MenuItem>
        <MenuItem value={4}>Diamond</MenuItem>
      </Select>
     </FormControl>

     
    </>
  );
}

<Sidebar /><Navbar />
      <Routes>
        <Route path='Customers' element={<Customer/>}/>
        <Route path='AddNewCustomer' element={<AddNewCustomer/>}/>
      </Routes>