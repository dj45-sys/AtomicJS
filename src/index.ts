import {CreateServer} from '../lib/Atomic';

let port:number = 8080
let host:string = 'localhost'


class Server extends CreateServer{
    static Start() {
        super.Start(port, host);
    }
}

Server.Start();
