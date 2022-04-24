import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SinglePhotoInterface } from '../Interface/singlePhoto';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


type PhotoCardProps = {
    photo: SinglePhotoInterface
}

export const PhotoCard:React.FC<PhotoCardProps> = (props:PhotoCardProps) => {

  const {photo} = props;
  const[isFavorite, setFavorite] = React.useState(false)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
      <div className="autoCenterFlex marginTop">
          <Card sx={{ maxWidth: 1000 }}>
      <CardHeader
        avatar={
          <Avatar src={photo.user.profile_image.medium}>
          </Avatar>
        }
        
        title={photo.alt_description}
        subheader={photo.user.name}
      />
      <CardMedia
        component="img"
        height="auto"
        image={photo.urls.regular}
        alt={photo.alt_description}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {photo.user.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setFavorite(!isFavorite)}>
          <FavoriteIcon  style={{color: isFavorite ? "red" : "lightgray" }}/>
        </IconButton>
        <Typography>{isFavorite ? photo.likes+1 : photo.likes }</Typography>

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
          <Typography paragraph>Details:</Typography>
            <div className="details-container">
                <div>
                    <VisibilityIcon />
                    <span>{ photo.views}</span>
                </div>
                <div>
                    <FileDownloadIcon/>
                    <span>{ photo.downloads}</span>
                </div>
               
            </div>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    
  );
}