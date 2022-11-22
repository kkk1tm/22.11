class Employee {
	#name;
	salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary() {
	  return this.salary;
	}
}

class EmployeesCollection {
	#users;
	#salaries;
	
	constructor() {
		this.#users = [];
		this.#salaries = [];
	}
	add(user, salary) {
		this.#users.push(user);
		this.#salaries.push(salary);
	}
	show() {
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
	summ(){
	  let sum = 0;
	  let sum2 = 0;
	  for (let salary of this.#salaries) {
			sum2 = salary.getSalary();
			sum += sum2;
			console.log(sum2);
		}
	}
}

let ec = new EmployeesCollection;

ec.add(new Employee('Tate', 2300));
ec.add(new Employee('Mary', 9400));
ec.add(new Employee('Feliccia', 5600));
ec.add(new Employee('Ann', 3100));

ec.show();
ec.summ();

console.log("Hello, World!");