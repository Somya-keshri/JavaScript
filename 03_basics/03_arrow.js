const user = {
    username: "Buzz",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage()      // Buzz, welcome to website
user.username = "Sam"
user.welcomeMessage()      // Sam, welcome to website