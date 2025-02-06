CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_id BIGINT UNIQUE NOT NULL,
    username VARCHAR(255),
    balance DECIMAL(10, 2) DEFAULT 0,
    health DECIMAL(5, 2) DEFAULT 100,
    mood DECIMAL(5, 2) DEFAULT 100,
    energy INT DEFAULT 300
);
