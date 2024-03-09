import React from 'react'
import { Container, Grid, Card, CardContent,CardActions, Typography,Box,IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaRegComment } from "react-icons/fa";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

function LandingPageCW() {

  const [posted, setPosted] = useState(0);
const [draft, setDraft] = useState(0);
const [processing, setProcessing] = useState(0);
const [totalViews, setTotalViews] = useState(0);
const [viewCount, setViewCount] = useState(0);
const [commentCount, setCommentCount] = useState(0);

// Update these states dynamically based on your application logic
// For example, you might fetch these values from an API in a useEffect hook

useEffect(() => {
  // Fetch data and update states here
}, []);


  return (
    <Container maxWidth="xl" style={{backgroundColor:"white"}}>
      <Grid container spacing={3} style={{marginTop: '1%'}}>
    <Grid item xs={3}>
    <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Posted</Typography>
                <Typography variant="h6">{posted}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Draft</Typography>
                <Typography variant="h6">{draft}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Processing</Typography>
                <Typography variant="h6">{processing}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Total Views</Typography>
                <Typography variant="h6">{totalViews}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  <Grid container spacing={3} style={{marginTop: '1%'}}>
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5">IOT</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel possimus obcaecati esse, </Typography>
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
        
  <IconButton color="primary">
    <Box display="flex" flexDirection="column" alignItems="center">
      <VisibilityIcon fontSize="large" />
      <Typography variant="body2">{viewCount}</Typography>
    </Box>
  </IconButton>
  <IconButton color="secondary">
    <Box display="flex" flexDirection="column" alignItems="center">
      <FaRegComment size="1.5em" />
      <Typography variant="body2">{commentCount}</Typography>
    </Box>
  </IconButton>
  <IconButton color="error">
  <Box display="flex" flexDirection="column" alignItems="center">
    <DeleteIcon fontSize="large" />
  </Box>
</IconButton>

  </CardActions>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5">AI</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel possimus obcaecati esse, </Typography>
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
        
        <IconButton color="primary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <VisibilityIcon fontSize="large" />
            <Typography variant="body2">{viewCount}</Typography>
          </Box>
        </IconButton>
        <IconButton color="secondary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <FaRegComment size="1.5em" />
            <Typography variant="body2">{commentCount}</Typography>
          </Box>
        </IconButton>
        <IconButton color="error">
        <Box display="flex" flexDirection="column" alignItems="center">
          <DeleteIcon fontSize="large" />
        </Box>
      </IconButton>
      
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5">ML</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel possimus obcaecati esse, </Typography>
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
        
        <IconButton color="primary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <VisibilityIcon fontSize="large" />
            <Typography variant="body2">{viewCount}</Typography>
          </Box>
        </IconButton>
        <IconButton color="secondary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <FaRegComment size="1.5em" />
            <Typography variant="body2">{commentCount}</Typography>
          </Box>
        </IconButton>
        <IconButton color="error">
        <Box display="flex" flexDirection="column" alignItems="center">
          <DeleteIcon fontSize="large" />
        </Box>
      </IconButton>
      
        </CardActions>
      </Card>
    </Grid>
  </Grid>
    </Container>
  )
}

export default LandingPageCW