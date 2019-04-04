# **Testing Regular Expression**

If you have some JavaScript code that accepts a string, you need to test different variations that a user might put in.  For example:

    toyboat
    toyboats
    toy boats
    Toy boats
    joy boats
    to-boats
    toy-Boats

Naviagate to [regexpal](http://regexpal.com.s3-website-us-east-1.amazonaws.com/?_ga=2.234780446.103822050.1497920061-848749570.1493938714) and test the variations.

- In the top field, you enter the JavaScript parameter.  In this example, you would enter

        [Ttj]oy[ -]?[Bb]oat?

With this entered, paste the variations in the bottom field:

        ladybug
        lazy lug
        lazy slug
        hazy slug

After doing so, all the words are highlight which means that all of the variations would be found, let's say for example if you were searching for those words in a wikipedia article.