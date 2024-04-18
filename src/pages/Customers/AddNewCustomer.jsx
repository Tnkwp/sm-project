import { useState, useEffect } from 'react';
import '../CustomerCss/AddNC.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddNewCustomer() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New customer added:', { name, level, email, description });
    setName('');
    setLevel('');
    setEmail('');
    setDescription('');
  };

  const handleReset = (event) => {
    event.preventDefault();
    setName('');
    setLevel('');
    setEmail('');
    setDescription('');
  }

  useEffect(() => {
    console.log('Component mounted or updated');
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Customer</h2>
      <label htmlFor="name" className='name'>Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={level}
        label="Select Level"
        onChange={handleChange}
      >
        <MenuItem value="silver">Silver</MenuItem>
        <MenuItem value="gold">Gold</MenuItem>
        <MenuItem value="platinum">Platinum</MenuItem>
        <MenuItem value="diamond">Diamond</MenuItem>
      </Select>
     </FormControl>

      <label htmlFor="email" className='email'>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="description" className='description'>Description</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      

      <Stack spacing={2} direction="row">
      <Button type='reset' variant="outlined" className='cancel' onClick={handleReset}>Cancel</Button>
      <Button type="submit" variant="contained" className='save' onClick={handleSubmit}>SAVE</Button>
      </Stack>

      
    </form>
  );
}

export default AddNewCustomer;

