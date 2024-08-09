
let formStatus: "submitted";
formStatus = "submitted"; // Only value it can have is submitted.
// formStatus = "draft"; // This is invalid here as only value it can have is submitted.

let formStatus2: 'draft';
formStatus2 = "draft"; // Only value it can have is submitted.
// formStatus2 = "submitted"; // This is invalid here as only value it can have is draft.

let formStatus3: "pending" | "submitted" | "draft"; // Only value it can have is  "pending", "submitted", "draft".
formStatus3 = "pending";
formStatus3 = "submitted";
formStatus3 = "draft";
// formStatus3 = "progress"; // This is invalid here as only value it can have is  "pending", "submitted", "draft".

