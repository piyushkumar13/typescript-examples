/* By default, in typescript enum is an integer constant. */
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}

let status1: ApprovalStatus;
status1 = ApprovalStatus.submitted;
console.log("Status1 : ", status1);
console.log("Status1 string value : ", ApprovalStatus[status1]);

let status2: ApprovalStatus = ApprovalStatus.draft;
console.log("Status2 : ", status2);

/* Using enum in object field. */
let student = {
    firstName: "Piyush",
    lastName: "Kumar",
    formStatus: ApprovalStatus.submitted
};

console.log("Student : ", student);


/* Enum with different int contant number */

enum Month {

    Jan = 1,
    Feb,
    Mar,
    Sept = 9,
    Oct,
    Nov,
    Dec,
}

console.log("Month enum is : ", Month);

/* String constant enum is also possible from TypeScript 2.4 onwards. */
// https://stackoverflow.com/q/15490560
// https://www.typescriptlang.org/docs/handbook/enums.html

enum Week {
    mon = "MONDAY",
    tues = "TUESDAY",
    // fri, // If we leave without string value it will give error. So, if we are having string based enum, we need to provide values for all the enum constants.
    sat = "Saturday"
}
console.log("Week enum is : ", Week);
console.log("Monday enum constant is : ", Week.mon);
