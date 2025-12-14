export default {
  Base: '/api',
  Capture: {
    Base: '/captures',
    Get: '/all',
    GetOne: '/:id',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
    GetAvant: '/avant/:date',
    GetApres: '/apres/:date',
    GetEspece: '/espece/:espece',
  },
  token: {
    Base: '/generatetoken',
    Get: '/',
  },
  EspecePoisson: {
    Base: '/espece-poisson',
    Get: '/all',
  },
} as const;
