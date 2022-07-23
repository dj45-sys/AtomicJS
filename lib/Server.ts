import { createServer } from 'http'

abstract class CreateServer{
    /***
     * Initialize the server with the port and host
     * @param port The port to listen on
     * @param host The host to listen on
     */
    static Start(port: number, host?: string) {
        const server = createServer()
        server.listen(port, host, () => {
            const hostname = 'localhost' || host;
            console.log(`Server is running on http://${hostname}:${port}`);
        });
    }
}


export { CreateServer }