import express from 'express';
import bodyParser from 'body-parser';
import connectToDb from './db/connect';
import config from './config/index';
import posts from './routes/posts.routes';

const app = express();

connectToDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`server started - ${PORT}`);
});

app.use('/api', posts);
