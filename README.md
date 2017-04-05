
# :sweet_potato: Sweet Potato CMS :sweet_potato:
[![Build Status](https://travis-ci.org/yvonne-liu/week7-sweetpotato-cms.svg?branch=master)](https://travis-ci.org/yvonne-liu/week7-sweetpotato-cms)
![codecov](https://codecov.io/gh/yvonne-liu/week7-sweetpotato-cms/branch/master/graph/badge.svg)

## Database schema:

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

## What?
A basic CMS blog platform with authentication, session management and templating with handlebars.

## Why?
<user stories go here>

## How?
hapi for server creation and general back end stuff<br>
PSQL hosted on heroku for the database<br>
bcrypt for password hashing<br>
handlebars for templating<br>

## What did u learn tho?
[leaaaaaaaaarnings](./learnings.md)
