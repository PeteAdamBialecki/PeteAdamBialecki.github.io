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

npm Install Mongoose

        $ npm install --save mongoose@~4.4

Starting MongoDB

        $ mongod

Or to specify a config file:

        $ mongod --config /usr/local/etc/mongod.conf