// routes/index.js

import ClienteDetalhes from '../../pages/ClienteDetalhes';

const routes = [

  {
    path: '/cliente/:id', // Rota dinâmica para ClienteDetalhes com parâmetro ID
    element: <ClienteDetalhes />,
  },
];

export default routes;
