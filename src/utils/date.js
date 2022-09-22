export const toLocalString = function(dateTime) {
  const originDate = new Date(dateTime);
  const year = originDate.getFullYear();
  let month = padZero(originDate.getMonth() + 1);
  let day = padZero(originDate.getDate());
  let hours = padZero(originDate.getHours());
  let minutes = padZero(originDate.getMinutes());
  let seconds = padZero(originDate.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
};

function padZero(obj){
  return obj.toString().padStart(2, '0');
}