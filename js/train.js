const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// updateCounter(10, counter.increment.call(counter));
// counter.increment.call(counter);

// const objA = {
//     x: 1,
// };

// const objB = Object.create(objA);
// objB.y = 2;

// const objC = Object.create(objC);
// objC.z = 5;

// console.log(objC)


//////////////////////////////////////////////////////////////////////////////


const User = function ({email, password, message} = {}) {
    this.email = email;
    this.password = password;
    // User.message = "Я стат. свойство";
};

User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
};

User.message = function(obj) {
    console.log("User.logInfo -> obj", obj);
    console.log("Почта: ", obj.email);
};

const mango = new User({email: 'mango@mail.com', password: 111});

mango.changeEmail('my-new-mail@mail.com');

// console.dir(mango);
// console.dir(User);
User.message(mango);