import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  {CardStyledButton}  from './js/ButtonStyle';




function projectCard(props) {
    return(


		<Card id="Project-Card-Style" className="main-flex-column">
      <CardMedia id="Project-CardMedia-Style" image={props.picture} title={props.title}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
		{props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <CardStyledButton  size="small" href={`//${props.codeLink}`}>Site</CardStyledButton>
        <CardStyledButton  size="small" href={`//${props.websiteLink}`}>Code</CardStyledButton>
      </CardActions>
    </Card>
    )
}

export default projectCard;