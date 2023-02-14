#DATA DEFINITION LANGUAGE

#Create DB
CREATE DATABASE IF NOT EXISTS wal_db;

#Use DB
USE wal_db;

#Show all character sets available
SHOW CHARACTER SET;

SELECT @@character_set_database, @@collation_database;

#Drop an database
DROP DATABASE laxman;

CREATE TABLE wal_table (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(40) NOT NULL,
    emp_age TINYINT CHECK (emp_age > 18),
    emp_city VARCHAR(40) NOT NULL
);

#create table with other table
create table test like wal_table;
drop table test; 

#See table discription
DESC wal_table;

#Alter table schema

#add column
alter table wal_table
add emp_designation varchar(30) not null;

#Drop columns
alter table wal_table drop emp_designation;

# Rename table
#alter table wal_table rename to wal_table;
#rename table old_name to new_name

#rename column
#alter table wal_table rename column emp_designation to emp_designation;

#Modify datatype
#alter table wal_table modify emp_age tinyint;

#Add constraints
#alter table wal_table add constraint unique(emp_age);

#Drop constraint
#alter table wal_table drop constraint emp_age;

#Truncate tabel - delete all records from table
#truncate table table_name;




# DATA MANIPULATION LANGUAGE

#INSERT 

#insert into table_name values()
INSERT INTO wal_table VALUES
(585,"laxman",20,"hyd","trainee"),
(581,"laxman rao",21,"hyd","trainee"),
(580,"chaitanya",22,"hyd","trainee");

#insert into table_name(col1,col2,..)values() - we can add required columns data only 
INSERT INTO wal_table(emp_id,emp_name,emp_city,emp_designation) VALUES
(582,"llll","hyd","trainer");

#insert values using set
INSERT INTO wal_table SET emp_id=600,
emp_name="lokesh",
emp_city="guntur",
emp_designation="trainee",
emp_age=19;



#Fetch all records from database
SELECT 
    *
FROM
    wal_table;
    
#condition
SELECT * FROM wal_table WHERE emp_age>18 and emp_age<40;
SELECT * FROM wal_table WHERE emp_age between 18 and 40;
SELECT * FROM wal_table WHERE emp_age IN(20,22);
SELECT * FROM wal_table WHERE emp_name like "l%";
SELECT * FROM wal_table WHERE emp_name like "_a%";

#Sorting
#Ascending order
SELECT * FROM wal_table ORDER BY emp_name;
#Descending order
SELECT * FROM wal_table ORDER BY emp_name DESC;

#Group By
select count(emp_name),emp_city from wal_table
group by emp_city having count(emp_name)>2;

select min(emp_age),emp_name from wal_table
group by emp_name;



select count(*),emp_designation from wal_table group by emp_designation;

select min(emp_age) from wal_table;
select max(emp_age) from wal_table;
select avg(emp_age) from wal_table;
select count(emp_city) from wal_table;
select count(distinct emp_city) from wal_table;
select count(distinct emp_city),emp_city from wal_table group by emp_city;



#UPDATE
SET SQL_SAFE_UPDATES=0;

SELECT * FROM wal_table WHERE emp_id=580;

UPDATE wal_table set emp_city="Hyderabad" WHERE emp_id=580;


#DELETE

DELETE FROM wal_table WHERE emp_id=580;