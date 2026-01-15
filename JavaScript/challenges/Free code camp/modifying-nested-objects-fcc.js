let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
const data = "data"
const online = "online"

const index = {
  data,
  online
}
userActivity[index.data][index.online] = 45
// Only change code above this line

console.log(userActivity);
