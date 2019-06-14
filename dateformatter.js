"use strict";

const today = new Date();
const singleDigitTester = 10;

exports.getDate = function(dateString) {
	const monthOffset = 1;

	let date = today.getDate();
	let month = today.getMonth() + monthOffset;
	let year = today.getFullYear();

	dateString = dateString.toLowerCase();

	date < singleDigitTester ? date = "0" + date : date;
	month < singleDigitTester ?  month = "0" + month : month;

	dateString = dateString.replace("dd", date);
	dateString = dateString.replace("mm", month);
	dateString = dateString.replace("yyyy", year);

	return dateString;
};

exports.getTime = function(timeString) {
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    timeString = timeString.toLowerCase();

    minutes < singleDigitTester ?  minutes = "0" + minutes : minutes;
    seconds < singleDigitTester ?  seconds = "0" + seconds : seconds;

    timeString = timeString.replace("hh", hours);
	timeString = timeString.replace("min", minutes);
	timeString = timeString.replace("ss", seconds);

	return timeString;
};

exports.getDateTime = function(dateTimeString) {
	const dateStringLastPosition = 10;
	const timeStringBeginningPosition = 11;

	let date = dateTimeString.substring(0, dateStringLastPosition);
	let time = dateTimeString.substring(timeStringBeginningPosition, dateTimeString.length);
	return this.getDate(date) + " " + this.getTime(time);
};