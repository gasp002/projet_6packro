-- Drop tables if they exist (ignore errors if tables do not exist)
DROP TABLE users purge;
DROP TABLE workout_logs purge;
DROP TABLE food_logs purge;
DROP TABLE contact purge;
-- Drop sequence if it exists
BEGIN
   EXECUTE IMMEDIATE 'DROP SEQUENCE user_id_seq';
EXCEPTION
   WHEN OTHERS THEN
       IF SQLCODE != -2289 THEN
           RAISE;
       END IF;
END;
/

-- Create users table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR2(100),
    email VARCHAR2(100),
    password VARCHAR2(100)
    -- Additional columns can be added as needed
);

-- Create sequence for auto-incrementing the user_id
CREATE SEQUENCE user_id_seq START WITH 1 INCREMENT BY 1;

-- Create trigger for auto-incrementing the user_id
CREATE OR REPLACE TRIGGER users_before_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SELECT user_id_seq.NEXTVAL
    INTO :new.user_id
    FROM dual;
END;
/

-- Create workout_logs table without foreign key


CREATE TABLE workout_logs (
    log_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    workout_type VARCHAR2(100),
    exercise VARCHAR2(100),
    repetitions NUMBER,
    weight NUMBER,
    log_date DATE
);

-- Create food_logs table without foreign key
CREATE TABLE food_logs (
    log_id NUMBER PRIMARY KEY,
    user_id NUMBER ,
    food_category VARCHAR2(100),
    ingredient VARCHAR2(100),
    weight NUMBER,
    log_fdate DATE
);

-- Add foreign key to workout_logs
ALTER TABLE workout_logs
ADD CONSTRAINT fk_workout_user
FOREIGN KEY (user_id)
REFERENCES users(user_id);

-- Add foreign key to food_logs
ALTER TABLE food_logs
ADD CONSTRAINT fk_food_user
FOREIGN KEY (user_id)
REFERENCES users(user_id);


-- Drop food log sequence if it exists
BEGIN
   EXECUTE IMMEDIATE 'DROP SEQUENCE food_log_id_seq';
EXCEPTION
   WHEN OTHERS THEN
       IF SQLCODE != -2289 THEN
           RAISE;
       END IF;
END;
/

CREATE SEQUENCE workout_log_id_seq START WITH 1 INCREMENT BY 1;


-- Create sequence for auto-incrementing the log_id in food_logs
CREATE SEQUENCE food_log_id_seq START WITH 1 INCREMENT BY 1;

-- Create trigger for auto-incrementing the log_id in food_logs
CREATE OR REPLACE TRIGGER food_logs_before_insert
BEFORE INSERT ON food_logs
FOR EACH ROW
BEGIN
    SELECT food_log_id_seq.NEXTVAL
    INTO :new.log_id
    FROM dual;
END;
/



CREATE TABLE contact (
contactemail VARCHAR(100));

ALTER TABLE contact
ADD name VARCHAR(40);

ALTER TABLE contact
ADD message VARCHAR(1000);



Desc workout_logs;
select * from users;

select * from users;
select * from food_logs;
select * from workout_logs;
select * from contact;