CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL,
    priority TEXT CHECK (priority IN ('high', 'medium', 'low')),
    due DATE
)

INSERT INTO users (task, priority, due)
VALUES ('?', '?' , '?')