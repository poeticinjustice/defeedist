DROP TABLE IF EXISTS stories;

CREATE TABLE stories (
  story_id serial unique primary key,
  story_name VARCHAR(140) not null,
  story_desc TEXT,
  read boolean not null default false,
  story_time_written timestamp,
  story_time_read timestamp,
  story_added timestamp not null default now()
  );

CREATE INDEX on stories (read) ;
CREATE INDEX on stories (story_time_written) ;
CREATE INDEX on stories (story_added) ;
