import {Server} from '../src';
import {join}  from 'path'
(new Server().Start(join(__dirname, 'public'), 8080, () => {
    console.log('Server started on port 8080');
}))
