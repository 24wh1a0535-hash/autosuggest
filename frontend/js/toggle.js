var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"../images/john.png"
    },
    {
       "name":"Jane Doe",
        "gender":"female",
        "image":"../images/jane.png" 
    }
]
var curId=0;
function toggle(){
    //toggle cardId from 0->1&1->0
    curId=(curId+1)%2
    var user=users[curId];
    document.getElementById("user-img").src=user.image;

    //to do:update for name and gender
    //name
    document.getElementById("user-name").innerText=user.name;

    //gender
    document.getElementById("user-gender").innerText=user.gender;
}