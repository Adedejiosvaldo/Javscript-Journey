"use strict"

const gradeCalculator = (studentScore, totalScore) => {
	if (typeof studentScore === 'number' && typeof totalScore === 'number') {

		grade = (studentScore / totalScore) * 100
		if (grade >= 90) {
			return `student grade is A: ${grade}%`
		} else if (grade >= 90) {
			return `student grade is  B : ${grade}%`
		} else if (grade >= 80) {
			return `student grade is C : ${grade}%`
		} else if (grade >= 70) {
			return `student grade is D : ${grade}%`
		} else if (grade >= 60) {
			return `student grade is E :  ${grade}%`
		} else {
			return `student grade is F:  ${grade}%`
		}
	} else {
		throw Error('Code issues')
	}
}


try {
	const result = gradeCalculator(90, 100)
	console.log(result)
} catch (e) {
	console.log(e.message)
}