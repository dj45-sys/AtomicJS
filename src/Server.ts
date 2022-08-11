import { createServer as cs, IncomingMessage as im, ServerResponse as sr } from 'http';
import { readFileSync, readdirSync } from 'fs';

/**
 * This class provides a simple HTTP server that can be used to serve static files.
 * @class Server
*/
class Server {
    public _Server = cs();
    /**
     * Method all in one for listening to a port and serving a file.
     * @method
     * @access public
     * @param {string} path - The path of public files
    */
    public Start(path: string, port: number, callback?: () => void) {
        cs((req: im, res: sr) => {

            req.on('error', err => {
                console.error(err);
                // Handle error...
                res.statusCode = 400;
                res.end('400: Bad Request');
                return;
            });

            res.on('error', err => {
                throw new Error(err.toString());
                // Handle error...
            });
            const filename = readdirSync(path).forEach(file => {
                return file
            });
            if (req.url === `/${filename}`) {
                const content = readFileSync(path + filename)
                res.statusCode = 200
                res.end(content);
            }

        }
        ).listen(port, callback);
    }
}

// TODO(Dj45-sys): Finish Start method and Server Class

export default Server;
