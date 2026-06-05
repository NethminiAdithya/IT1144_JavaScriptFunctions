let studentName="Mexi";
let studentAge="21";
let studentRegistered="True";
studentMarks="82";

//Printing values

console.log(studentName,studentAge,studentRegistered);

//calculate whether the student has passed or fail


if (studentMarks>=50){
	console.log("Pass")
}
	else{
		
		console.log("Fail")
		
	}
	
	//creating an Array Called Subjects
	
	const subjects=["Maths","Science","English","ICT"];
	
	for (let key in subjects){
		
		console.log(subjects[key]);
	}
	
	//calculate total
 const calculateTotal=(x,y)=>x+y
 console.log(calculateTotal(80,92));
