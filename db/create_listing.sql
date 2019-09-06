create table houses(
property_name serial primary key,
address varchar(60) not null,
city text not null,
state text not null,
zip integer not null
);