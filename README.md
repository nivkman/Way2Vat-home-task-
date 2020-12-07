## BackEnd home task - Niv Kaufman

### High Level
The feature - Getting data with unknown size from remote API

### Logic
there is a function name `getData(index: number) : string[]` (which is given)\
the function return array of strings by index 
>index is a non-negative integer\
>size of retrun array is max 5 or less, if less it's the last page

you need to read all the data (starting from zero index)

* write a pseudocode for that logic (in plain text).

### Architecture 
the same function is on a REST service `GET http://foo.bar/data?index=2` (which you don't implement nor maintain)\
you need to write a consumer that read all the data (starting from zero index) and to persist the data
>return status is 200 with json response `{ data: string[] }`\
>return status is 400 for bad input\
>return status is 500 when unavailable

* write an HLD for that consumer - what are the considerations in the design?
* implement your design

**Bonus questions**
* the REST service is poorly maintain and have an Uptime of 80%, how your Design handle it?
* what is the throughput of your design? can you improve it?
* how you going to test this feature?
* how you going to monitor this feature?

### NOTES
1. pick your language and services and persistant medium.
2. your implementation doesn't need to be perfect -> write issues or TODO on items you think is needed
3. upload to github
