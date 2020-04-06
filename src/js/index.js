import './../css/app.scss';
import Background from './background';
import Api from './hero';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
    	// Start application
    	// new Background();
    	new Api();
    }
}

new App();
