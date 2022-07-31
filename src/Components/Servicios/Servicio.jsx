
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom';
import Grow from '@mui/material/Grow';

export default function Servicio({id, title, description, picture}) {
  return (

    <Grow direction="up" in={true} mountOnEnter unmountOnExit
    style={{ transformOrigin: '0 0 0' }}
          {...( { timeout: 1000 } )}>
    
      <Card sx={{ width: 380, maxHeight:350, marginBottom:'20px' }}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={picture}
        />
        <CardContent className="descriptionCard" sx={{paddingTop:'5px', paddingBottom:'0'}}>
          <Typography gutterBottom variant="h5" component="div" py={0}>
            {title}
          </Typography>
          <Typography variant="body2" color="secondary" py={0}>
            {description}
          </Typography>
        </CardContent>
        <CardActions className="descriptionCard" sx={{paddingTop:'0', paddingBottom:'0.5', justifyContent:'right', maxHeight:'20px'}}>
          <Button size="small"> 
            <Link to={`/serv/${id}`} style={{color:'inherit', textDecoration:'none'}}>
              <ArrowForwardIosIcon size='large' color='info' /> 
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
}