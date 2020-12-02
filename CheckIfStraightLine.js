// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false


// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

const test1 = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
const test2 = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]

// slope = y2-y1 / x2-x1 
const checkStraightLine = (coordinates) => {
    let b = new Set();

    for (let i = 1; i < coordinates.length; i++) {
        let x1 = coordinates[i - 1][0];
        let x2 = coordinates[i][0];
        let y1 = coordinates[i - 1][1];
        let y2 = coordinates[i][1];

        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        let m = yDiff / xDiff;
        b.add(-(m * x1 - y1));
    }

    return b.size === 1;
};

console.log(checkStraightLine(test1))
console.log(checkStraightLine(test2))