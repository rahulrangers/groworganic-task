import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loading=()=>{
    return(
    <div className="w-screen h-screen flex justify-center  mt-[300px] ">
      <Box sx={{ display: 'flex' }} >
        <CircularProgress />
      </Box>
      </div>
    )
}
export default Loading;