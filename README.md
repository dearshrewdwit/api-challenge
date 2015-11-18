RESTful API CHALLENGE
---

As a user, so I can save milliseconds of my time, I want to be able to post messages, see them appear, edit them, and delete them, all without reloading or refreshing the page.

Technologies
---
* Ruby on Sinatra (Modular) with DataMapper
* Postgres Database
* Javascript
* AJAX with JSON

Features
---
* No page reloading or refreshing.
* Using AJAX calls:
  * Messages can be created. And are saved in database immediately.
  * Messages can be read. Created messages  are retrieved and shown on page at the top immediately.
  * Messages can be edited. Updates are saved and displayed automatically
  * Messages can be deleted. Results shown immediately.
* Create, edit, and delete buttons with event listeners.
