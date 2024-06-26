import EditBoat from '../../pages/EditBoat'; 

const routes = [
 {
    path: '/boats/:boatId/edit', // Rota dinâmica para edição de embarcação
    element: <EditBoat />,
  },
];

export default routes;
