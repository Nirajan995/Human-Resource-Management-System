create database human_resource_management_system;

use human_resource_management_system;

create table employees
(
    employee_id int(200) not null
    auto_increment,
    first_name varchar
    (25) not null,
    last_name varchar
    (25) not null,
    age int
    (100) not null,
    email varchar
    (100) not null,
    address varchar
    (150) not null,
    phone_no varchar
    (20), hire_date date not null,
    primary key
    (employee_id)
);

    insert into employees
    values(1, 'Ram', 'karki', 25, 'RamKarki@gmail.com', 'Ilam', '9862434566', '2008/04/12')
    ;

    insert into employees
    values(2, 'Kushal', 'Raut', 35, 'KushalRaut@hotmail.com', 'Biratnagar', '9802767543', '2012/07/21')
    ;

    alter table employees modify phone_no varchar
    (20) unique;

    create table salaries
    (
        employee_id int not null,
        salary int,
        foreign key (employee_id) references employees(employee_id) on delete cascade
    );

    insert into salaries
    values(1, 40000);

    insert into salaries
    values(2, 70000);

    select *
    from employees;

    select *
    from salaries;

    create table users(user_id bigint primary key auto_increment,
                    username varchar
    (20) not null,
                    email varchar
    (50) not null,
                    password varchar
    (120) not null        
);

    create table roles(role_id int primary key auto_increment,
                    name varchar
    (20) not null
);



    create table user_roles
    (
        user_id bigint not null ,
        role_id int not null,
        foreign key (user_id) references users(user_id),
        foreign key (role_id) references roles(role_id)
);

        insert into users values(2,'Naryn@gmail.com',
        '$2y$12$7N6OWcYs6LD0K2Ij06E0n.74iNvGXwz5udTW2i7BxtoUJAqDg6pI. ','nirajan');

        

        INSERT INTO roles
            (name)
        VALUES('ROLE_USER');
        INSERT INTO roles
            (name)
        VALUES('ROLE_EMPLOYEE');
        INSERT INTO roles
            (name)
        VALUES('ROLE_ADMIN');

        insert into user_roles values(1,2);
        insert into user_roles values(2,2);

    
