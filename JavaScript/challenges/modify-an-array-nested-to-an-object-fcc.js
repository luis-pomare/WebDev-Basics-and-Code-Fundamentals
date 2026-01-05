let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  const newObject = { ...userObj, data: { ...userObj.data, friends: [...userObj.data.friends, friend] } }

  user.data.friends.push(friend) // mutates original object as part of the fcc challenge
  user.data.friends.push(friend)
  return newObject["data"]["friends"]// return new object good practice correct answer
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
console.log(user.data.friends)
