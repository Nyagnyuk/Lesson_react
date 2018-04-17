export class UserService{
	constructor(){
		this.url = 'http://localhost:8000/users';
	}
	getAll () {
		return fetch(this.url).then(resp =>resp.json());
 
	}

	save(name, pwd){
		let data = {name: name, pwd: pwd};
		let str = JSON.stringify(data);

		// let req = new XMLHttpRequest();
		// req.open('POST', this.url);
		// req.send(str);

		return fetch(this.url, {
			method: 'POST', body:str
		}).then(
			resp => resp.status === 200
		);
	}
}