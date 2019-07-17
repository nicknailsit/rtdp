import ApiRoutes from './api';

export default (self) => {
    self.app.use('/api', ApiRoutes);
}



