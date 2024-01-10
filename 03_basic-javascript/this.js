
// use of this keyword.

// this key only used in object and it help to acess the current context.


const user = {
    userName : "behan",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to this website.`);
        // console.log(this);
    }
}

user.greeting = function(){
    console.log(`hello ${this.userName}`); 
}


// user.welcomeMessage();
// user.greeting();

// user.userName = "sitesh";

// user.welcomeMessage();
// user.greeting();



const welcomeMessage = function(){
    let userName = "behan";
    console.log(`${userName}, welcome to this website.`);
}

// welcomeMessage();



