const today = new Date();

exports.getDate = function(dateString) {
	let date = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();

	dateString = dateString.toLowerCase();

	if(date < 10) { date = "0" + date; }
	if(month < 10) { month = "0" + month; }

	dateString = dateString.replace('dd', date);
	dateString = dateString.replace('mm', month);
	dateString = dateString.replace('yyyy', year);

	return dateString;
}

exports.getTime = function(timeString) {
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    timeString = timeString.toLowerCase();

    if(minutes < 10) { minutes = "0" + minutes; }
    if(seconds < 10) { seconds = "0" + seconds; }

    timeString = timeString.replace('hh', hours);
	timeString = timeString.replace('min', minutes);
	timeString = timeString.replace('ss', seconds);

	return timeString;
}

exports.getDateTime = function(dateTimeString) {
	let date = dateTimeString.substring(0, 10);
	let time = dateTimeString.substring(11, dateTimeString.length);
	return this.getDate(date) + " " + this.getTime(time);
}