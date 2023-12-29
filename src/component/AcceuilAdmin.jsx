import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import baniereImage from '../assets/imagesTahiry/baniere.jpg';
// import axios from "axios";
// import { useEffect, useState } from "react";
import './AcceuilAdmin.css';

const AcceuilAdmin = () => {
    // const [teste, setMyData] = useState([]);
    // useEffect(() => {
    //     axios.get("https://192.168.8.102:3010/tahiry/v1/contents/types").then(response => {
    //         setMyData(response); console.log("okey azo");
    //     }).catch(error => { console.error("tsy mandeha"); console.error(error) });
    // }, []);

    const datas = {
        status: 200,
        nbResult: 5,
        items: [

            {
                idThematique: 1,
                thematique: "Dina",
                titre: "Video",
                mediaType: "aldlkfkasdnlfknadsknflkadsnfknadsfknaskldf",
            },
            {
                idThematique: 2,
                thematique: "Video 2",
                titre: "video",
                mediaType: "aldlkfkasdnlfknadsknflkadsnfknadsfknaskldf",
            },
            {
                idThematique: 3,
                thematique: "article 1",
                titre: "article",
                mediaType: "aldlkfkasdnlfknadsknflkadsnfknadsfknaskldf",
            },
            {
                idThematique: 4,
                thematique: "Video 3",
                titre: "Video",
                mediaType: "aldlkfkasdnlfknadsknflkadsnfknadsfknaskldf",
            },
            {
                idThematique: 5,
                thematique: "Video 3",
                titre: "Video",
                mediaType: "aldlkfkasdnlfknadsknflkadsnfknadsfknaskldf",
            },

            {
                idThematique: 6,
                thematique: "Video 3",
                titre: "Video",
                mediaType: "aldlkfkasdnlfknadsknflkadsnfknadsfknaskldf",
            },

        ]
    };
    const news = {
        status: 200,
        nbResult: 5,
        new: [

            {
                idNew: 1,
                imgNew: baniereImage
            },
            {
                idNew: 2,
                imgNew: baniereImage
            },
            {
                idNew: 3,
                imgNew: baniereImage
            },
        ]
    };

    return (
        <>
            <Typography variant="h1" paddingBottom={2}>
                Gestion Acceuil
            </Typography>
            <Button variant="contained" color="secondary">
                Apercu Acceuil
            </Button>
            <Box sx={{ bgcolor: '#ffffff', mt: 2, borderRadius: 2, textAlign: 'center', p: 3 }}>


                <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1 }}>
                    <Typography variant="h2" padding={1}>
                        Baniere
                    </Typography>
                </Box>
                <img src={baniereImage} alt="Description" style={{ width: '80%', borderRadius: 20 }} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                    <Button variant="contained" color="secondary" >
                        Modifier
                    </Button>
                </Box>
            </Box>


            <Stack>
                <Box sx={{ bgcolor: '#ffffff', mt: 2, borderRadius: 2, alignItems: 'center', p: 3 }}>
                    <Typography variant="h2" paddingBottom={2}>
                        Description bibliothèque
                    </Typography>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} item xs={12} md={6} lg={3}>
                        <Grid item xs={12} md={6} lg={4} >
                            <Grid margin={1}>
                                <Grid margin={1} p={2} bgcolor={'#eef2f6'} textAlign={'center'} borderRadius={2}>
                                    <Typography variant="h4">Description</Typography>
                                    <Stack direction="row" spacing={2} mt={2} justifyContent={'center'} >
                                        <Button variant="contained" color="secondary">
                                            Voir
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Modifier
                                        </Button>
                                    </Stack>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4} >
                            <Grid margin={1}>
                                <Grid margin={1} p={2} bgcolor={'#eef2f6'} textAlign={'center'}  borderRadius={2}>
                                    <Typography variant="h4">Description</Typography>
                                    <Stack direction="row" spacing={2}  mt={2} justifyContent={'center'}>
                                        <Button variant="contained" color="secondary">
                                            Voir
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Modifier
                                        </Button>
                                    </Stack>

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6} lg={4} >
                            <Grid margin={1}>
                                <Grid margin={1} p={2} bgcolor={'#eef2f6'} textAlign={'center'}  borderRadius={2}>
                                    <Typography variant="h4">Description</Typography>
                                    <Stack direction="row" spacing={2} mt={2} justifyContent={'center'}>
                                        <Button variant="contained" color="secondary">
                                            Voir
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Modifier
                                        </Button>
                                    </Stack>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box sx={{ bgcolor: '#ffffff', mt: 2, borderRadius: 2, alignItems: 'center', p: 3 }}>
                    <Typography variant="h2" paddingBottom={2}>
                        Contenu par thèmatique
                    </Typography>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} item xs={12} md={6} lg={3}>
                        {datas.items.map((item) => (
                            <Grid key={item.idThematique} item xs={12} md={6} lg={4} >
                                <Grid margin={1}>
                                    <Grid margin={1} p={2} bgcolor={'#eef2f6'} borderRadius={2}>
                                        <Typography variant="h3" >
                                            {item.thematique}
                                        </Typography>
                                        <Typography variant="h3">
                                            {item.titre}
                                        </Typography>
                                        <Typography variant="h4" sx={{ wordWrap: 'break-word' }}>
                                            {item.mediaType}
                                        </Typography>
                                        <Stack direction="row" spacing={2} mt={2} justifyContent={'center'}>
                                            <Button variant="contained" color="secondary">
                                                Voir
                                            </Button>
                                            <Button variant="contained" color="secondary">
                                                Modifier
                                            </Button>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>

            <Stack>
                <Box sx={{ bgcolor: '#ffffff', mt: 2, borderRadius: 2, alignItems: 'center', p: 3 }}>
                    <Typography variant="h2" paddingBottom={2}>
                        News letters
                    </Typography>

                    <Button variant="contained" color="secondary" >
                        Nouveau
                    </Button>
                    <Grid className="test" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} item xs={12} md={12} lg={12}>
                        {news.new.map((e) => (
                            <Grid key={e.idNew} item xs={12} md={12} lg={12} >
                                <Grid margin={1} >
                                    <Grid margin={1} p={2} bgcolor={'#eef2f6'} borderRadius={2} >
                                        <div >
                                            <img src={baniereImage} alt="Description" style={{ width: '100%', borderRadius: 20, textAlign: 'center' }} />
                                        </div>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                                            <Button variant="contained" color="secondary" >
                                                SUPPRIMER
                                            </Button>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Stack>
        </>
    );
}

export default AcceuilAdmin;