### Installing bcrypt

- Normally you would just type ```npm install bcrypt```. However, people on Linux (especially Ubuntu and Debian) might get an error because bcrypt needs to be compiled and the compiler and the relative utilities are missing. To fix this, type ```sudo apt-get install build-essential```. Only after that type ```npm install bcrypt```. Now it should work. 

