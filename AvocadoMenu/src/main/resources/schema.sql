-- Create a table for sandwiches
CREATE TABLE sandwiches
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    description TEXT,
    attributes  TEXT,
    image_url   VARCHAR(255),
    stype   VARCHAR(255)
);

-- Create a table for juices
CREATE TABLE juices
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    description TEXT,
    attributes  TEXT NOT NULL,
    image_url   VARCHAR(255)
);

-- Create a table for sides
CREATE TABLE others
(
    id         BIGINT AUTO_INCREMENT PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    attributes TEXT         NOT NULL,
    image_url  VARCHAR(255)
);

