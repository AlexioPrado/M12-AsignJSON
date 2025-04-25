let person = {
    "first": null,
    "last": null,
    "course": null,
    "section": null,
    "role": null,
};

let button = document.getElementById('submit');

button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('.input');
    let go = true;
    for(let i = 0; i<inputs.length ;i++){
        if (!inputs[i].value){
            alert('missing input')
            go = false;
            break        
        }
    }
    if (go){
        person.first = inputs[0].value;
        person.last = inputs[1].value;
        person.course = inputs[2].value;
        person.section = inputs[3].value;
        person.role = inputs[4].value;

        const p = JSON.stringify(person);
        console.log('JSON Format')
        console.log(p)
        const s = JSON.parse(p);
        console.log('Object Format')
        console.log(s)
        
        
    }
    
});








/*{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}*/