import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Pagination,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function App() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        backgroundColor: 'white',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, color: 'black' }}
                    >
                        Bloggy
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
                    url('https://media.istockphoto.com/photos/taking-notes-on-a-ring-binded-notepad-inf-picture-id1315904960?b=1&k=20&m=1315904960&s=170667a&w=0&h=DAzctGlI9mREbPS7eWByiz42KN1p795OaomGlBW7X9s=')`,
                        height: '500px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        fontSize: '4rem',
                    }}
                >
                    Write Your Way To Success
                </Box>
            </Box>
            <Container
                maxWidth="lg"
                sx={{
                    paddingTop: '2px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: '800',
                        paddingBottom: '3px',
                    }}
                >
                    Articles
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: '240' }}
                                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        React Js
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    margin: '0 10px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{ display: 'flex' }}>
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            Guy Clemons
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: '240' }}
                                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Node Js
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    margin: '0 10px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{ display: 'flex' }}>
                                    <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                                    <Box ml={2}>
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            Guy Clemons
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: '240' }}
                                    image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Express Js
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    margin: '0 10px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{ display: 'flex' }}>
                                    <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            Guy Clemons
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: '100%' }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: '240' }}
                                    image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Firebase
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    margin: '0 10px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{ display: 'flex' }}>
                                    <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                                    <Box ml={2}>
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            Guy Clemons
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Box my={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination count={10} />
                </Box>
            </Container>
        </div>
    );
}

export default App;
