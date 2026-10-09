const students = [
    { id: 1, name: "Nguyen Van An", age: 20, score: 8.5 },
    { id: 2, name: "Tran Thi Binh", age: 19, score: 6.5 },
    { id: 3, name: "Le Van Cuong", age: 21, score: 4.5 },
    { id: 4, name: "Pham Thi Dung", age: 20, score: 9.0 },
    { id: 5, name: "Hoang Van Em", age: 22, score: 5.5 },
    { id: 6, name: "Do Minh Anh", age: 19, score: 7.5 },
    { id: 7, name: "Bui Quang Huy", age: 20, score: 3.5 },
    { id: 8, name: "Nguyen Thi Lan", age: 21, score: 8.0 },
    { id: 9, name: "Tran Duc Long", age: 22, score: 6.0 },
    { id: 10, name: "Le Thu Ha", age: 20, score: 9.5 },
    { id: 11, name: "Pham Minh Khang", age: 19, score: 5.0 },
    { id: 12, name: "Vo Ngoc Mai", age: 21, score: 7.0 },
    { id: 13, name: "Dang Tuan Nam", age: 20, score: 4.0 },
    { id: 14, name: "Hoang Thu Phuong", age: 22, score: 8.8 },
    { id: 15, name: "Nguyen Gia Bao", age: 19, score: 6.8 },
    { id: 16, name: "Tran Minh Quan", age: 20, score: 7.8 },
    { id: 17, name: "Le Ngoc Son", age: 21, score: 2.5 },
    { id: 18, name: "Pham Hai Yen", age: 22, score: 9.2 },
    { id: 19, name: "Bui Thanh Tung", age: 20, score: 5.8 },
    { id: 20, name: "Do Khanh Linh", age: 19, score: 8.2 }
];

students.forEach(function(student) {
    console.log(`
        ID: ${student.id}
        Tên: ${student.name}
        Tuổi: ${student.age}
        Điểm: ${student.score}
        ---------------------------
        `);
});

function isPassed(score) {
    return score >= 5;
}

students.forEach(function(student) {
    if(isPassed(student.score)) {
        console.log(`${student.name}: Đạt`);
    }
    else {
        console.log(`${student.name}: Không đạt`);
    }
});

console.log(`\n`);

function dat(student) {
    return student.score >= 5;
}

const passedStudents = students.filter(dat);
console.log(`những khứa qua môn:`);
console.log(passedStudents);

console.log(`\n`);

function tachmon(student) {
    return student.score < 5;
}

const failedStudents = students.filter(tachmon);
console.log(`những khứa sẽ làm cổ đông:`);
failedStudents.forEach(function(student) {
    console.log(`${student.name} - ${student.score} điểm`);
})

const giaroi = students.filter(function(student) {
    return student.age >= 21;
});

console.log(`người già:`);
console.log(giaroi);

const hsg = students.filter(function(student) {
    return student.score >= 8;
});
const hsgmap = hsg.map(function(student) {
    return `${student.name} - Học sinh giỏi`;
});

console.log(`hoc bong owners:`);
console.log(hsgmap);

const getClassification = (score) => {
    if (score >= 8) return `Giỏi`;
    if (score >= 6.5) return `Khá`;
    if (score >= 5) return `Trung bình`;
    else return `Yếu`;
};

const xeploai = students.map(function(student) {
    return `${student.name} - ${getClassification(student.score)}`;
});

console.log(`xếp loại từng cháu:`)
console.log(xeploai);

const trenTB = students
    .filter(function(student){
        return student.score >= 6.5;
    }).map(function(student) {
        return `${student.name} - ${student.score} điểm`;
    });

console.log(`các khứa trên trung bình:`);
console.log(trenTB);
