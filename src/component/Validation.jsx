import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import {Pagination, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import BoutonAction from './BoutonAction';
import Chip from 'ui-component/extended/Chip';



const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };


    const date = new Date(dateString);


    return date.toLocaleDateString('fr-FR', options);
};

const rows = {
    status: 200,
    nbResult: 10,
    items: [
        {
            idCon: 1,
            title: "Sample Title 1",
            author: "Jean Pierre",
            region: "Alaotra-Mangoro",
            theme: "Environnement",
            contentType: "Vidéo",
            statu: 3,
            description: "Description 1",
            dateHour: "2023-12-10T09:25:43.957Z"
        },
        {
            idCon: 2,
            title: "Sample Title 2",
            author: "Pierrot Rakoto",
            region: "Amoron’i Mania",
            theme: "Social & économique",
            contentType: "Audio",
            statu: 1,
            description: "Description 2",
            dateHour: "2023-12-05T09:25:43.957Z"
        },
        {
            idCon: 3,
            title: "Sample Title 3",
            author: "Rakoto Rabe",
            region: "Analamanga",
            theme: "Dina et Loi",
            contentType: "Article",
            statu: 2,
            description: "Description 3",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 4,
            title: "Sample Title 4",
            author: "Jean Pierre",
            region: "Analanjirofo",
            theme: "Gouvernance et Gestion",
            contentType: "PDF",
            statu: 3,
            description: "Description 4",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 5,
            title: "Sample Title 5",
            author: "Paul Africa",
            region: "Androy",
            theme: "Culture, Réseau et Communication",
            contentType: "eBook",
            statu: 1,
            description: "Description 5",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 6,
            title: "Sample Title 6",
            author: "George Bush",
            region: "Anosy",
            theme: "Genre et Inclusivité",
            contentType: "Autres",
            statu: 3,
            description: "Description 6",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 7,
            title: "Sample Title 7",
            author: "Perline Rakoto",
            region: "Atsinanana",
            theme: "Environnement",
            contentType: "Vidéo",
            statu: 3,
            description: "Description 7",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 8,
            title: "Sample Title 8",
            author: "Freddy Mercury",
            region: "Atsimo-Andrefana",
            theme: "Social & économique",
            contentType: "Audio",
            statu: 2,
            description: "Description 8",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 9,
            title: "Sample Title 9",
            author: "Koto Kely",
            region: "Atsimo-Atsinanana",
            theme: "Dina et Loi",
            contentType: "Article",
            statu: 2,
            description: "Description 9",
            dateHour: "2023-12-20T09:25:43.957Z"
        },
        {
            idCon: 10,
            title: "Sample Title 10",
            author: "Koto be",
            region: "Betsiboka",
            theme: "Gouvernance et Gestion",
            contentType: "PDF",
            statu: 1,
            description: "Description 10",
            dateHour: "2023-12-20T09:25:43.957Z"
        }
    ]
};
const style = {
    bgcolor: 'background.paper',
  };
const Validation = () => {

    return (
        < >
            <Typography variant="h1" >
                Contenue a valider
            </Typography>
            <Paper sx={{ width: '100%', overflow: 'hidden', m: 3 }}>
                <TableContainer sx={{ maxHeight: 700 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow sx={{...style}}>
                                <TableCell>Titre</TableCell>
                                <TableCell>Region</TableCell>
                                <TableCell>Thematique</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Statut</TableCell>
                                <TableCell>Auteur</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.items.map((item) => (
                                <>
                                    <TableRow key={item.idCon}>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.region}</TableCell>
                                        <TableCell>{item.theme}</TableCell>
                                        <TableCell>{item.contentType}</TableCell>
                                        <TableCell>{formatDate(item.dateHour)}</TableCell>
                                        <TableCell>
                                            {item.statu === 1 && <Chip variant="outlined" label="Invalider" size="small" chipcolor="error" />}
                                            {item.statu === 2 && <Chip variant="outlined" label="Prevalide" size="small" chipcolor="warning" />}
                                            {item.statu === 3 && <Chip variant="outlined" label="Valider" size="small" chipcolor="success" />}
                                        </TableCell>
                                        <TableCell>{item.author}</TableCell>
                                        <TableCell><BoutonAction  data={item}/></TableCell>
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination count={11} color="secondary" />
            </Paper>
        </>
    );

}

export default Validation;