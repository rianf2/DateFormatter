const df = require('./dateformatter');
const now = new Date();

describe('date strings should be correct', () => {

	test('date strings should be in correct format', () => {
		const regex = /[0-9]{2}[\W\S][0-9]{2}[\W\S][0-9]{2,4}/
	
		expect(df.getDate('DD/MM/YYYY')).toMatch(regex);
		expect(df.getDate('MM/DD/YYYY')).toMatch(regex);
		expect(df.getDate('YYYY/MM/DD')).toMatch(regex);
		expect(df.getDate('DD-MM-YYYY')).toMatch(regex);
		expect(df.getDate('DD MM YYYY')).toMatch(regex);
	});
	
	test('date in DD/MM/YYYY format gets correct data', () => {
		let date = now.getDate();
		let month = now.getMonth() + 1;
		let year = now.getFullYear();
	
		if(date < 10) { date = "0" + date; }
		if(month < 10) { month = "0" + month; }
	
		let dateString = date + "/" + month + "/" + year;
	
		expect(df.getDate('DD/MM/YYYY')).toBe(dateString);
	});
});

describe('time strings should be correct', () => {
	test('time strings should be in the correct format', () => {
		const regex = /[0-9]{2}[\W\S][0-9]{2}|[\W\S][0-9]{2}/

		expect(df.getTime('HH:MIN:SS')).toMatch(regex);
		expect(df.getTime('HH:MIN')).toMatch(regex);
	});

	test('time in HH:MIN format gets correct data', () => {
		let hours = now.getHours();
		let minutes = now.getMinutes();
	
		if(minutes < 10) { minutes = "0" + minutes; }

		let timeString = hours + ":" + minutes;
	
		expect(df.getTime('HH:MIN')).toBe(timeString);
	});
});

describe('datetime strings should be correct', () => {
	test('time strings should be in the correct format', () => {
		const regex = /[0-9]{2}[\W\S][0-9]{2}[\W\S][0-9]{2,4}[\W][0-9]{2}[\W\S][0-9]{2}|[\W\S][0-9]{2}/

		expect(df.getDateTime('DD/MM/YYYY HH:MIN:SS')).toMatch(regex);
		expect(df.getTime('DD/MM/YYYY HH:MIN')).toMatch(regex);
	});

	test('time in DD/MM/YYYY HH:MIN format gets correct data', () => {
		let date = now.getDate();
		let month = now.getMonth() + 1;
		let year = now.getFullYear();
		let hours = now.getHours();
		let minutes = now.getMinutes();
	
		if(date < 10) { date = "0" + date; }
		if(month < 10) { month = "0" + month; }
		if(minutes < 10) { minutes = "0" + minutes; }

		let dateTimeString = date + "/" + month + "/" + year + " " + hours + ":" + minutes;
	
		expect(df.getDateTime('DD/MM/YYYY HH:MIN')).toBe(dateTimeString);
	});
});