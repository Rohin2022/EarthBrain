import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton'


export default function PostCard(props) {
    const upvotePost = () => {

    }

    return (
        <Card style={{marginBottom:18}}>
            <CardContent>
                <Typography variant="h5" component="div" textTransform="capitalize">
                    {props.title}
                </Typography>
                <Typography variant="subtitle1">
                    {props.timeStamp}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
            </CardContent>
            <CardActions style={{ justifyContent: "right" }}>
                <Button onClick={upvotePost} startIcon={<ThumbUpIcon />} style={{ textTransform: "none" }}>
                    Upvote this Post
                </Button>
                <Button href={`/createResponse/${props.title}`} style={{ textTransform: "none" }}>
                    View Post
                </Button>
            </CardActions>
        </Card>
    )
}