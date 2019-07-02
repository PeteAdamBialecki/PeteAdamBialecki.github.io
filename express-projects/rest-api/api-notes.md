# **REST API Instructions**

## **Set Up Mongo DB On YOur Machine**

For the complete instructions, click [here](https://treehouse.github.io/installation-guides/mac/mongo-mac.html).  For Mac, install and run MongoDB with Homebrew: 

Open the Terminal app and type

        brew update.

After updating Homebrew, enter

        brew install mongodb

After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running

        mkdir -p /data/db

Make sure that the /data/db directory has the right permissions by running

        sudo chown -R `id -un` /data/db

Then

        # Enter your password

Run the Mongo daemon in one of your terminal windows to start the server. Entering the command

        mongod

Run the Mongo shell while the Mongo daemon is running in the first terminal. Type the following command in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.

        mongo

To exit the Mongo shell run quit()

To stop the Mongo daemon hit ctrl-c

## **To Run The REST API**

- Navigate to this directory and run the command

        node mongoose-sandbox.js

If it works, you should get:

        DB connection successful
        Saved.
        DB connection closed.

Next, run the command:

        mongo

Type the command

        use sandbox

You should see the message

        switched to sandbox

Sample with the command

        db.getCollectionNames()

You should get

        ["animals"]

Sample with the command

        db.animals.find()

Results:

        { "_id" : ObjectId("5d178b548eb868a6516ce40b"), "size" : "small", "name" : "Marvin", "mass" : 0.035, "color" : "gray", "type" : "mouse", "__v" : 0 }
        { "_id" : ObjectId("5d178b548eb868a6516ce40c"), "size" : "medium", "name" : "Gretchen", "mass" : 6.35, "color" : "brown", "type" : "nutria", "__v" : 0 }
        { "_id" : ObjectId("5d178b548eb868a6516ce40d"), "size" : "medium", "name" : "Iris", "mass" : 45, "color" : "gray", "type" : "wolf", "__v" : 0 }
        { "_id" : ObjectId("5d178b548eb868a6516ce408"), "size" : "big", "name" : "Lawrence", "mass" : 6000, "color" : "gray", "type" : "elephant", "__v" : 0 }
        { "_id" : ObjectId("5d178b548eb868a6516ce409"), "size" : "small", "name" : "Angela", "mass" : 0.007, "color" : "golden", "type" : "goldfish", "__v" : 0 }
        { "_id" : ObjectId("5d178b548eb868a6516ce40a"), "size" : "big", "name" : "Fig", "mass" : 190500, "color" : "golden", "type" : "whale", "__v" : 0 }

