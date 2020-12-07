# Bonus questions

###### Q: the REST service is poorly maintain and have an Uptime of 80%, how your Design handle it?
A: Because the API Uptime service is only 80 percent, I prefer to save the API response data for each iteration and request, even if the service fails, most of the data will still be saved successfully.

###### Q: what is the throughput of your design? can you improve it?
A: The feature will not work in the best efficient way but it will keep the data saved and protected. It can be improved but the completeness of the data will be more dangerous. 

###### Q: how you going to test this feature?
A: Because we are working with GET request we can test our function on a different DB file without any problems and worries (besides traffic overload that can be avoided by testing in the server dead times).

###### Q: how you going to monitor this feature?
A: We can set the test function to run in the background at a random or scheduled timing.
