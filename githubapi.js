const my_username='arnvj-ACM';
fetch(`https://api.github.com/users/${my_username}`)
.then(response=>{
    if(!response.ok){
        throw new Error("Could not able to fetch!");
    }
    return response.json();
})
.then(data=>{
    console.log(data);
    console.log(`Name : ${data.name}`);
    console.log(`ID : ${data.id}`);
    console.log(`URL : ${data.html_url}`);
})