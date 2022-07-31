import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Productos.css'
import {Link} from 'react-router-dom'

export default function Producto({id, title, picture, condition, description }) {
return (
        <Card sx={{ maxWidth: 300}} >
        <CardMedia
            component="img"
            height="200"
            image={picture}
            alt={title}
        />
        <CardContent className='cardContentProducto'>
            <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
            </Typography>
            <div >
                <Typography variant="body2" color="secondary">
                Condición: {condition}
                </Typography>
            </div>
            <Typography variant="body2" color="white">
            {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">
                <Link to={`/prod/${id}`} style={{color:'inherit', textDecoration:'none'}}>
                    Ver detalle
                </Link>
            </Button>
        </CardActions>
        </Card>
    )
}
