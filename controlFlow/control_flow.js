let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = 'Full access granted';
} else if (userRole === 'manager') {
    accessLevel = 'Limited access granted';
} else {
    accessLevel = 'No access granted';
}

console.log('Access Level:', accessLevel);


let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = 'Welcome, Admin!';
    } else {
        userMessage = 'Welcome, User!';
    }
} else {
    userMessage = 'Please log in to access the system.';
}

console.log('User Message:', userMessage);

let userType = 'subscriber';
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';     
        break;
    case 'manager':
        userCategory = 'Manager';     
        break;
    case 'subscriber':
        userCategory = 'Subscriber';     
        break;
    default:
        userCategory = 'Unknown';
}

console.log('User Category:', userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? 'Authenticated' : 'Not authenticated';

console.log('Authentication Status:', authenticationStatus);

// Practice task  : Dietary Services
let dietaryUserType = 'nonSubscriber'; // employee, enrolledMember, subscriber, nonSubscriber (need to enroll or at least subscribe first to avail this facility)
let dietaryUserCategory; // Employee, Enrolled Member, Subscriber, Non-Subscriber
let dietaryAccessLevel;

switch (dietaryUserType) {
    case 'employee':
        dietaryUserCategory = 'Employee';
        dietaryAccessLevel = 'Access granted to Dietary Services';
        break;
    case 'enrolledMember':
        dietaryUserCategory = 'Enrolled Member';
        dietaryAccessLevel = 'Access granted to Dietary Services and one-on-one interaction with a dietician.';
        break;
    case 'subscriber':
        dietaryUserCategory = 'Subscriber';
        dietaryAccessLevel = 'Partial access granted to facilitate Dietary Services only.';
        break;
    case 'nonSubscriber':
        dietaryUserCategory = 'Non-Subscriber';
        dietaryAccessLevel = 'No access granted : Need to enroll or at least subscribe first to avail this facility.';
        break;
    default:
        dietaryUserCategory = 'ERROR';
        dietaryAccessLevel = 'System error, please contact the support team';
}

console.log('Access Level:', dietaryUserCategory + ', ' + dietaryAccessLevel);
