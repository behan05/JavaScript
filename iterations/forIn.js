// Forin loop.
// forin return index of Array element.

const nums = [1,2,3,4,5,6,7,8,9,10];

// for (const numkey in nums) {
//     console.log(numkey);
// }

// for (const key in nums){
//     if (nums[key] === 10){
//         console.log(nums[key]);
//     }
// }

const courseName = [
    {
        courseName:"python",
        price:999
    },
    {
        courseName:"java",
        price:1999
    },
    {
        courseName:"data science",
        price:12999
    },
    {
        courseName:"javaScript",
        price:2999
    },
]

for (const index in courseName){
    if(courseName[index].courseName === "python"){
        console.log(courseName[index]);
    }
}


for (const course of courseName){
    if (course.courseName == "java"){
        console.log(course);
    }
}
