import {Loader} from 'aurelia-loader';

export class Injector {

	static inject() { return [Loader]; }
	constructor(loader) {
        this.loader = loader;

        this.heading = 'Welcome to the Aurelia Navigation App!';
    }

  welcome(){
  	this.loader.loadModule('my-plugin', '')
  			.then(function(m) {
    			new m.Bootstrap();
    		});


    //System.import('my-plugin')
    //		.then(function(m) {
    //			new m.Bootstrap();
    //		});
  }
}