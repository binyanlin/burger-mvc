## burger-mvc

* Template engines
* Express
* Handlebars.js
* Model-View-Controller
* Object-relational mapping

This app uses a complete Model (mySQL), View (Handlebars), Controller (ORM) scheme. 
![startup image](https://i.imgur.com/rLkjYXR.png)
On booting up, hitting see all burgers queries the mySQL database to append all the burgers to the page
![showing all the burgers](https://i.imgur.com/tYDlYWg.png)
![adding a burger](https://i.imgur.com/4lTW4DL.png)

Ordering a burger is easy, by hitting the add button the burger gets appended to the top of the uneaten burger list
![new burger appended](https://i.imgur.com/K1PqBr3.png)

Hitting the devour button updates the mySQL database and changes the burger to eaten
![eaten burger](https://i.imgur.com/toD1LD4.png)
