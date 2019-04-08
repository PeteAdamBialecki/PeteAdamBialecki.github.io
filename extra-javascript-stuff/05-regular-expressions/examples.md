## **Matching Specific Characters**

The following are the RgEx expression that would match the listed words.

lady ?bugs?

        ladybug
        ladybugs
        lady bugs

la[dz]y[ ]?[bl]ugs?

        ladybug
        lady bugs
        lazy bug
        lazy lug

[hl]a[dz]y[ ]?[s]?[bl]ug

        ladybug
        lazy lug
        lazy slug
        hazy slug

[fl]ad[yi][n]?[g]?[ ]?[br]?ug[!]?

        ladybug
        fading rug!

## **Matching Character Ranges**

[a-z]a[a-z]?t[a-z]?

        bat
        cat
        data
        eat
        fast

[1-9] [a-z]

        1 a
        2 a
        3 a
        4 a
        5 a
        8 a
        9 b

[0-9][0-9][0-9][0-9] [A-Z]able

        8345 Gable
        7238 Gable
        2349 Table
        8475 Cable
        0994 Fable
        1047 Zable

[0-9][0-9][0-9][0-9][0-9]?

        4849
        4472
        4901
        40502
        43470
        40496

## **Using Wildcard Characters**

[0-9] = \d
[A-Za-z0-9] = \w
[ \t\r\n\f] = \s
Any character = .
* = zero or more
+ = one or more

Repitions:
{3} = three
{3,} = three or more
{3,5} = between three and five

        Social Security Numbers:
        \d{3}-\d{2}-\d{4}

## **Excluding Characters**

[^] = Exlude characters
[^@] = Sample: Exclude any character except @
[^@.] = match any character except @ and .

\d = digit
\w = word
\s = whitespace
\D = not digit
\W = not word
\S = Not white space

## **Alternation**

| = Alternation (or)

## **Groups**

(sub){2} = Matches "subsub"
(sub)?pat = Matches "pat" and "subpat"

## **Beginnign and Ending of Strings**

^ = Beginning of a string
$ = End of a string