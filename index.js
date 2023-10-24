// Add your code here
// const init = () => {
//     const formData = {
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     };



// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

//     fetch("http://localhost:3000/dogs", configurationObject)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (object) {
//             console.log(object);
//         })
//         .catch(function (error) {
//             alert("Bad things! Ragnarők!");
//             console.log(error.message);
//         });

// }


const body = document.querySelector("body");
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
            name,
            email,
        }),
    })
        .then((res) => res.json())
        .then((data) => (document.body.innerHTML = data["id"]))
        .catch((err) => {
            const error = document.createElement("div");
            error.innerHTML = "Unauthorized Access";
            body.append(error);
        });
}
