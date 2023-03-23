import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';

export default function Student() {
    const[name, setName] = React.useState('')
    const[age, setAge] = React.useState('')
    // Display the elements in database
    const[students, setStudents] = React.useState([])

    const paperStyle = {padding: '50px 20px', width:600, margin: '20px auto'}

    const handleClick = (e) => {
        e.preventDefault()
        const student = {name, age}
        console.log(student)
        fetch("http://localhost:8081/student/add",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log("New Student Addedd")
            })
    }

    // convert the data into json and send it to setStudents
    React.useEffect(() => {
        fetch("http://localhost:8081/student/all")
        .then(res => res.json())
        .then((result) => {
            setStudents(result)
        })
    }, [])
  return (
    
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Studenty Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField id="outlined-basic" label="Student Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} />
      <Button variant="contained" onClick={handleClick}>Contained</Button>
    </Box>
    
    </Paper>

    {/* Display the data in database */}
    <h1>Students</h1>
    <Paper elevation={3} style={paperStyle}>
        {students.map(student => 
            <Paper elevation={3} style={{margin:"10px", padding: '15px', textAlign:"left"}} key={student.id}>
                Id:{student.id}<br />
                Name:{student.name}<br />
                Address:{student.address}<br />
            </Paper>
            )}
    </Paper>
    </Container>
  );
}
