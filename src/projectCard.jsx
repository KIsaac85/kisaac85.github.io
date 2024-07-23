import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





function projectCard(props) {
    return(


		<Card id="cardStyle">
      <CardMedia id="cardMediaStyle" image={props.picture} title={props.title}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
		{props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="blackButton"  size="small" href={`//${props.codeLink}`}>Site</Button>
        <Button className="blackButton" size="small" href={`//${props.websiteLink}`}>Code</Button>
      </CardActions>
    </Card>
    )
}

export default projectCard;