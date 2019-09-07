import data from './data.json';
import { finished } from 'stream';

class User {}
class Friend {}


//Mockdata

const viewer = new User();
viewer.id = '1';
viewer.name= 'me';

const friends = data.map(obj => {
    const friend = new Friend(); // create a friend everytime an object is passed in the array.
    friend.id = require('crypto').randomBytes(10).toString('hex');
    friend.firstName = obj.firstName;
    friend.lastName = obj.lastName;
    friend.gender = obj.gender;
    friend.language = obj.language;
    friend.email = obj.email;
    friend.image = obj.image;
    return friend;
});

//resolvers

module.exports = {
    getUser: (id) => id===viewer.id ? viewer : null,
    getViewer: () => viewer,
    getFriend: (id) => friends.find(f => f.id===id),
    getFriends: () => friends,
    User,
    Friend
}