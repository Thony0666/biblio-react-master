// // Importez useState
// import React, { useState } from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import { Pagination, TableCell, TableHead, TableRow, Typography } from '@mui/material';
// import BoutonAction from './BoutonAction';
// import Chip from 'ui-component/extended/Chip';

// const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString('fr-FR', options);
// };

// const Validation = () => {
//     // Utilisez useState pour gérer l'état du tableau
//     const [rowData, setRowData] = useState({
//         status: 200,
//         nbResult: 10,
//         items: [
//             // ... (votre tableau de données)
//         ],
//     });

//     // Fonction pour mettre à jour le statut lorsqu'un bouton est cliqué
//     const handleStatusChange = (index, newStatus) => {
//         const updatedItems = [...rowData.items];
//         updatedItems[index].statu = newStatus;
//         setRowData({
//             ...rowData,
//             items: updatedItems,
//         });
//     };

//     return (
//         <>
//             <Typography variant="h1" >
//                 Contenu à valider
//             </Typography>
//             <Paper sx={{ width: '100%', overflow: 'hidden', m: 3 }}>
//                 <TableContainer sx={{ maxHeight: '50%', }}>
//                     <Table stickyHeader aria-label="sticky table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Titre</TableCell>
//                                 <TableCell>Région</TableCell>
//                                 <TableCell>Thématique</TableCell>
//                                 <TableCell>Type</TableCell>
//                                 <TableCell>Date</TableCell>
//                                 <TableCell>Statut</TableCell>
//                                 <TableCell>Auteur</TableCell>
//                                 <TableCell>Action</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rowData.items.map((item, index) => (
//                                 <TableRow key={item.idCon}>
//                                     <TableCell>{item.title}</TableCell>
//                                     <TableCell>{item.region}</TableCell>
//                                     <TableCell>{item.theme}</TableCell>
//                                     <TableCell>{item.contentType}</TableCell>
//                                     <TableCell>{formatDate(item.dateHour)}</TableCell>
//                                     <TableCell>
//                                         {item.statu === "1" && <Chip variant="outlined" label="Invalider" size="small" chipcolor="error" />}
//                                         {item.statu === "2" && <Chip variant="outlined" label="Prevalide" size="small" chipcolor="warning" />}
//                                         {item.statu === "3" && <Chip variant="outlined" label="Valider" size="small" chipcolor="success" />}
//                                     </TableCell>
//                                     <TableCell>{item.author}</TableCell>
//                                     <TableCell>
//                                         {/* Passez la fonction de mise à jour du statut au composant BoutonAction */}
//                                         <BoutonAction onUpdateStatus={(newStatus) => handleStatusChange(index, newStatus)} data={item} />
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <Pagination count={11} color="primary" />
//             </Paper>
//         </>
//     );
// }

// export default Validation;

// import { Button } from '@mui/material';
// import React from 'react';

// const user = {
//   idUser: 2,
//   name: "NAivo"
// };

// const historique = [1, 2, 3, 4, 5];

// const Historique = historique.includes(user.idUser);

// const Teste = () => {
//   return (
//     <div>
//       {Historique ? (
//         <Button>
//           Annuler
//         </Button>
//       ) : null}
//       <Button>
//         Valider
//       </Button>
//     </div>
//   );
// }

// export default Teste;
import React, { useState } from "react";

const Teste = () => {
  const [data, setData] = useState({
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
        user: 3,
        description: "Description 1",
        dateHour: "2023-12-10T09:25:43.957Z"
      },
      // ... (rest of the data)
    ]
  });

  const handleIncrementUser = (itemId) => {
    const newData = { ...data };
    const itemToUpdate = newData.items.find(item => item.idCon === itemId);

    if (itemToUpdate) {
      itemToUpdate.user += 1;
      setData(newData);
    }
  };

  const handleDecrementUser = (itemId) => {
    const newData = { ...data };
    const itemToUpdate = newData.items.find(item => item.idCon === itemId);

    if (itemToUpdate) {
      itemToUpdate.user -= 1;
      setData(newData);
    }
  };

  return (
    <div>
      {data.items.map(item => (
        <div key={item.idCon}>
          <p>Title: {item.title}</p>
          <p>User: {item.user}</p>
          <button onClick={() => handleIncrementUser(item.idCon)}>Increment User</button>
          <button onClick={() => handleDecrementUser(item.idCon)}>Decrement User</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Teste;


  
  // Utilisez "jsxElement" comme vous le feriez dans votre application React.
  