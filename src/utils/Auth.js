class Authentication {

    constructor() {
        this.authenticated = false;
        this.writeAccess = false;
    }

    login(username, password, cb) {
        if(username === 'admin' && password === 'admin') {this.authenticated = true; this.writeAccess = true; cb();}
        else if(username === 'user' && password === 'user') {this.authenticated = true; cb();}
        else return 'Enter Valid credentials you can use Credentials on left'
    }

    logout(cb) {
        this.authenticated = false;
        this.writeAccess = false;
        cb();
    }

    hasWriteAccess() {
        return this.writeAccess;
    }

    isAuthenticated() {
        return this.authenticated;
    }

}

export default new Authentication();