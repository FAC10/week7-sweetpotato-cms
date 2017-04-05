# week7-sweetpotato-cms

Database schema:

### Users: 1 to 1
Column | Type | Modifiers
--- | --- | ---
user_id | integer | not null default
username | character varying(100) | not null
password | character varying(50) | not null
isAdmin | boolean | not null

### Posts: 1 to Many

Column | Type | Modifiers
--- | --- | ---
post_id | integer | not null default
title | character varying(50) | not null
body | character varying(500) | not null
date | date | not null
user_id | integer | not null
