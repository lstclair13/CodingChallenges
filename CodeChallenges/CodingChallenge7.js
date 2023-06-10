class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(otherPerson) {
		
		if(this.age < otherPerson.age){
			return otherPerson.name + " is older than me."
		}
			if(this.age > otherPerson.age){
			return otherPerson.name + " is younger than me."
		}
			if(this.age == otherPerson.age){
			return otherPerson.name + " is the same age as me."
		}
	}
}