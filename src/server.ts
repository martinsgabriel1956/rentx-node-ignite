import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

const PORT = 3333;

app.use('/categories', categoriesRoutes);

app.use(express.json());

app.listen(PORT, () => console.log('Server is running!'));
