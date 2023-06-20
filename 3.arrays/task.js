'use strict';

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr2.every((item, index) => item === arr1[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const usersByGender = users.filter((user) => user.gender === gender);
    const usersAge = usersByGender.map((user) => user.age);
    const totalAge = usersAge.reduce((acc, age) => acc + age, 0);
    
    if (usersAge.length === 0) {
        return 0;
    }
    return totalAge / usersAge.length;
}  