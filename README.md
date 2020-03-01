# SFLambdaSample

## Prework

Have the below details from your salesforce org.

 - Username
 - Password
 - Security token (please find the related articles [here](https://success.salesforce.com/answers?id=90630000000glADAAY) and [here](https://help.salesforce.com/articleView?id=000331668&type=1&mode=1))

## Code
Clone this repository to your local.

 - cd SFLambdaSample
 - npm install
 - navigate to /node_modules/jsforce/lib/connection.js and change ***version: "42.0"*** (in line 26) to ***version: "47.0"***  and save.
 - zip the contents (inside the SFLambdaSample)
 - Upload it to a labmda function (Environment - Node.js).

After uploading create 3 environment variables as below.

 - username - yourSalesforceUserName
 - password - yourSalesforcePassword
 - secToken - yourSecurityToken (obtained from the prework)

Under **Basic settings** increase the Timeout to 1 min

# Testing

 - Configure test event by clicking on ***select a test event*** on top-right of page.
 - Use the basic Hello World, enter any name for **Event name** and create.
 - Hit **Test** next to it.
