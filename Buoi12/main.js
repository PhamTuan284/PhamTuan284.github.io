// 1. Viết hàm tạo Weapon với các thuộc tính name, damage, ...
function Weapon(name, damage) {
    this.name = name;
    this.damage = damage;
}

// 2. Viết hàm tạo Player với các thuộc tính name, level, weapon, weapon object khởi tạo từ
// Weapon. Player có các methods:
// - attack() tính và in ra màn hình lượng sát thương gây ra = weapon.damage * level - changeWeapon() thay đổi weapon của Player
function Player(name, level, weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function () {
        console.log(this.name+" Attack, Damage = " + this.weapon.damage * this.level)
    };
    this.changeWeapon = function (weaponChange) {
        this.weapon = weaponChange;
    }
}

// 3. Tạo một vài đối tượng từ Player và Weapon, gọi phương thức attack() trên các đối tượng đó
let infinityGauntlet = new Weapon("Infinity Gauntlet", 9999),
    ironManSuit = new Weapon("Iron Man Suit", 100),
    captainShield = new Weapon("Captain's Shield", 50);

let thanos = new Player("Thanos", 999, infinityGauntlet),
    tonyStark = new Player("Tony Stark", 50, ironManSuit),
    steveRogers = new Player("Steve Rogers", 30, captainShield);

console.log(thanos.attack());
console.log(tonyStark.attack());
console.log(steveRogers.attack());
tonyStark.changeWeapon(infinityGauntlet);
console.log(tonyStark.weapon);

// 4. Tạo một object calculator, có các thuộc tính a, b là 2 số, và các phương thức:
// a. get(a, b) tham số nhận vào là 2 số a, b
// b. add() trả về tổng a + b
// c. sub() trả về hiệu a - b
// d. div(), mul(), rem(), exp(), ... trả về kết quả phép tính tương ứng
// e. Làm thế nào để cho phép gọi hàm theo chuỗi VD cal.get(4,5).add(); // 9
let calculator = {
    a: 0,
    b: 0,
    get(a, b) {
        this.a = a;
        this.b = b;
        return this
    },
    add() {
        console.log(this.a + this.b);
        return this;
    },
    sub() {
        console.log(this.a - this.b);
        return this;
    },
    div() {
        console.log(this.a / this.b);
        return this;
    },
    mul() {
        console.log(this.a * this.b);
        return this;
    },
    rem() {
        console.log(this.a % this.b);
        return this;
    },
    exp() {
        console.log(this.a ** this.b);
        return this;
    }
}
calculator.get(4, 5).add();

// 1. Viết hàm tạo Counter, có thuộc tính count, và các phương thức
// - count là tham số truyền vào, mặc định = 0
// - up() tăng count lên 1
// - down() giảm count 1
// - get() in ra count hiện tại
// - Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();
function Counter(count = 0) {
    this.count = count;
    this.up = function () {
        console.log("Count = " + this.count++);
        return this
    }
    this.down = function () {
        console.log("Count = " + this.count--);
        return this
    };
    this.get = function () {
        console.log("Count = " + this.count);
        return this
    }
}
let counter = new Counter();
counter.up().up().get().down().get();

// 2. Viết hàm tạo Girl có các thuộc tính và phương thức tùy ý 😅
function Girl(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
    this.talk = function () {
        return console.log("Hello, my name is " + this.name)
    }
}
let maria = new Girl("Maria", 18, "Excellence");
console.log(maria);
maria.talk();

// 3. Viết hàm tạo Boy có các thuộc tính và phương thức tùy ý 😉 (Boys, you know what I mean?)
function Boy(name, age, appearance) {
    this.name = name;
    this.age = age;
    this.appearance = appearance;
    this.flirt = function () {
        return console.log("abcxxx")
    };
}
let tuan = new Boy("Tuan", 24, "handsome");
console.log(tuan);
tuan.flirt();