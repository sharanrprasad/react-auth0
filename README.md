## OAuth 2.0 
 client app - Auth request  
 auth grant returned to the app 
 step3 - send the auth grant to the Auth Server (Provider)
 step4 - return the access token

Oauth is for authorization - That is to decide what resource to provide access to

Open ID Connect is for authentication - who has the access

uses Access Token (usually JWT) - Token contains all the scopes (permissions)


### Implict mode for SPA

If the Application is a Single-Page Application (meaning an application running in a 
browser using a scripting language like JavaScript), then the Single-Page 
Login Flow (Implicit Grant) should be used. In this case, instead of 
getting an authorization code that needs to be exchanged for an Access 
Token, the Application directly retrieves an Access Token. On 
the plus side, this is more efficient since it reduces the 
number of round trips required to get an Access Token. However, a 
security consideration is that the Access Token is exposed on the client side. 
Also, note that this flow does not return a Refresh Token because the browser cannot keep it private 
(read the SPAs and Refresh Tokens panel for a workaround).

App directs the browser to the Auth0 sign-in 
Auth0 redirects to your app, at the callback URl you chose
Your app reads the token from the URL


## Open ID Connect - Sits on top of oauth 2.0
Identity Provider - Google or Facebook
Relying party - Mostly our app

Uses Identity Token (JWT)
The Id token contains a variety of user data
