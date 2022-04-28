Create Table sportsEvent() {
    id integer serial primary key,
    jsom jsonb,
    created_at timestamp default current_timestamp
}