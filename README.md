# Smart-Connected-Mirror
NodeJs  + VueJS = Smart Connected Mirror

# Set Up
Install node modules
```
npm install
brew install mongodb
sudo mkdir -p ./data/db
mongod --dbpath ./data/db
should display the second time : [initandlisten] waiting for connections on port 27017
npm install mongoose
```

# Launching
Launch the server available on the http://localhost:8080
```
mongod --dbpath ./data/db &
npm start
```

Enjoy !
