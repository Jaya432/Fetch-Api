async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();

    

    data = data.filter(user => user.userId == 1); 

    console.log(data);

    document.getElementById('demo').innerHTML = data.map(e => `ID: ${e.id}  <br> TITLE: ${e.title} <br> BODY: ${e.body} <br> <br>`).join('')
}
