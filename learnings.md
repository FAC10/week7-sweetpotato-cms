### Installing bcrypt

- Normally you would just type ```npm install bcrypt```. However, people on Linux (especially Ubuntu and Debian) might get an error because bcrypt needs to be compiled and the compiler and the relative utilities are missing. To fix this, type ```sudo apt-get install build-essential```. Only after that type ```npm install bcrypt```. Now it should work.

#### Traaaaavis!!!
Travis is also a linux machine and requires a C++ compiler for using bcrypt, if you put the highlighted text from this image in your travis.yml it will work properly! Yay!
![](https://cloud.githubusercontent.com/assets/21139983/24758337/fcfb5322-1ad9-11e7-8eb8-ec52de38609b.png)
