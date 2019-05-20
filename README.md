# Smart-Connected-Mirror
NodeJs  + VueJS = Smart Connected Mirror

![alt connected-mirror smart-mirroir connected smart mirror](https://dms.licdn.com/playback/C5605AQGI6px7D_lwLA/f1f3318d583746d1aa1c17dbc217e896/feedshare-mp4_3300-captions-thumbnails/1507940147251-drlcss?e=1558454400&v=beta&t=FzBT8Qd1dmFts3TZiTDhpQ9wfDVJa0iK2Kd4ZueCgHc)

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

## License
[MIT](https://choosealicense.com/licenses/mit/)
