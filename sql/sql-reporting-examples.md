# **SQL**

## **Reporting Examples**

What's Yvette Levy's student ID number?

        SELECT * FROM students WHERE last_name = "Levy" AND first_name = "Yvette";

Generate a list of teachers sorted alphabetically by last name.

        SELECT first_name, last_name FROM teachers
        ORDER BY last_name ASC;

Which students have last names starting with 'A'?

        SELECT * FROM students
        WHERE first_name LIKE 'A%';

## **Joining Examples**

What's the total capacity of the school?

        SELECT SUM(Capacity) FROM rooms;

WHich room has the largest capacity?

        SELECT id, Max(capacity) FROM rooms;

Which subjects are taught in room 19?

        SELECT DISTINCT name FROM classes
        JOIN subjects ON classes.subject_id = subjects.id
        WHERE room_id = 19;

Which teachers teach only students in 8th grade?
        SELECT DISTINCT teachers.id, first_name, last_name FROM teachers
        JOIN classes ON teachers.id = classes.teacher_id
        JOIN subjects ON subjects.id = classes.subject_id
        WHERE grade = 8;

Which teacher teaches 7th grade science?

        SELECT DISTINCT teachers.id, first_name, last_name FROM subjects
        JOIN classes ON subjects.id = classes.subject_id
        JOIN teachers ON teachers.id = classes.teacher_id
        WHERE name = "Science" AND grade = 7;

Which teachers teach elective subjects (subjects without grade levels)?

        SELECT DISTINCT teachers.first_name, teachers.last_name, subjects.name FROM teachers
        JOIN classes ON teachers.id = classes.teacher_id
        JOIN subjects ON subjects.id = classes.subject_id
        WHERE grade IS NULL;

## **Advanced Selecting**

Generate a schedule for Rex Rios.

        SELECT period_id, name, subjects.grade, class_id, teacher_id, room_id FROM students
        JOIN schedule ON schedule.student_id = students.id
        JOIN classes ON classes.id = schedule.class_id
        JOIN subjects ON subjects.id = classes.subject_id
        WHERE first_name = "Rex" AND last_name = "Rios"
        ORDER BY period_id ASC;

How many students have Physical Education during first period?

        SELECT first_name, last_name, student_id, period_id, name FROM students
        JOIN schedule ON schedule.student_id = students.id
        JOIN classes on classes.id = schedule.class_id
        JOIN subjects ON subjects.id= classes.subject_id
        WHERE period_id = 1 AND name = "Physical Education";

Generate a list of students with last names from A to M.

        SELECT * FROM students
        WHERE last_name >= "A" AND last_name < "N"
        ORDER BY last_name DESC;

Do they have room for that many 6th graders?

        SELECT MIN(capacity) FROM classes
        JOIN subjects ON subjects.id = classes.subject_id
        JOIN rooms ON rooms.id = classes.room_id
        WHERE grade = 6;