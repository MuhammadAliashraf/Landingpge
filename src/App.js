import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import { Grid } from '@mui/material';
import Leftbar from './Component/leftbar';
import Rightbar from './Component/rightbar';
import Addplus from './Component/add';
import Home from './Component/home';


function App() {
  return (
    <div>
      <Navbar />
      <Grid container >
        <Grid item sm={2} >
        <Leftbar/>
        </Grid>
        <Grid item sm={7} >
          <Home/>
        </Grid>
        <Grid item sm={3} >
          <Rightbar/>
        </Grid>
      </Grid>
      <Addplus/>
    </div>
  );
}

export default App;
