import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import BarangOption from './BarangOption';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BarangCard(props) {
  console.log(props);
  
  const [likes, setLikes] = useState(0)

  const [price, setPrice] = useState(props.variant[0].price)
  const handleClick = harga => { 
      setPrice(harga)
   }

  let jumlahlike
 
  jumlahlike = <Typography minWidth="52px">{likes} {likes ==0 ? "Like" : "Likes"}</Typography>
   const [Ctr, setCtr] = useState(0)
  const handleLike = () => { 
    if(Ctr <1){
      setLikes(likes+1)
      setCtr(Ctr+1)
    }
    else{
      setLikes(likes-1)
      setCtr(Ctr-1)
    }
   }
   console.log(Ctr);
   const iconLike = (Ctr===0) ?  <FavoriteIcon/> : <FavoriteIcon sx={{ color: red[500] }}/>
  

   

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/src/assets/react.svg"
        alt="Paella dish"
      />
        <CardContent>
            <Typography gutterBottom variant="body2" component="div">
                {props.name}
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{fontWeight: "bold"}} >
                Rp {price}
            </Typography>
            <BarangOption variant = {[...props.variant]} handleClick={handleClick}/>
        </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites"
    onClick={handleLike}
  >
        {iconLike}

        </IconButton>
        {jumlahlike} 


        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}