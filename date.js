module.exports = getDate;

function getDate(){
    options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let today = new Date;
    let day = today.toLocaleDateString("en-US", options);

    return day;
}