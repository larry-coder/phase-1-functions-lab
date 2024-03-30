// lab 1
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    let distance = pickupLocation - headquarters;
    if (distance < 0) {
        distance = -distance;
    }
    return distance;
}
console.log(distanceFromHqInBlocks(50));



// lab 2
function distanceFromHqInFeet(pickupLocation) {
    const headquarters = 42;
    let distanceInFeet = (pickupLocation - headquarters)*264;
    if (distanceInFeet < 0) {
        distanceInFeet = -distanceInFeet;        
    }
    return distanceInFeet;
}    
console.log(distanceFromHqInFeet(50));


// lab 3
function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = (destination - start)*264;
     if (distanceTravelled < 0) {
         distanceTravelled = -distanceTravelled;        
    }
    return distanceTravelled;
}
console.log(distanceTravelledInFeet(34, 28));

// lab 4
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    }
    return distance;
    }

console.log(calculatesFarePrice(50, 58));