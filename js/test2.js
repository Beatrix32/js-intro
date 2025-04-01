const Student1 = ['Mark', 6, 5, 8, 10, 5];
const Student2 = ['Eve', 10, 10, 4, 8, 8];
const Student3 = ['Allen', 4, 4, 5, 6, 5];

function StudentsGrade (student)
{
    console.log('Student name: ' + student[0]);
    let grade = (student[1] + student[2] + student[3] + student[4] + student[5])/5;
    if(grade>=3.5)
    {
        console.log(student[0] + ' passed. Their grade: ' + grade);
    }
    else
    {
        let Newgrade = ((grade*5)+10)/6
        console.log(student[0] + ' failed. Their grade: ' + grade);
        if(Newgrade>=3,5)
        {
            console.log(student[0] - ' passed the course if they got a 10');
        }
    }
}

StudentsGrade(Student1);
StudentsGrade(Student2);
StudentsGrade(Student3);
