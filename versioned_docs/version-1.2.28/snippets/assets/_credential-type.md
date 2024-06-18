[//]: # (#### Credential type)

The credential type defined the authentication method/flow to be applied.

The Email Connection Asset supports the following credential flows:

1. None
2. OAuth (Client Credentials)
3. OAuth (Device Flow)
4. Secret

##### None

No authentication is performed.

##### OAuth (Client Credentials)

The Client Credentials Flow involves an application exchanging its application credentials, such as client ID and client secret, for an access token.
You can check the [Auth0 documentation](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow) for an example description.

![OAuth Client Credential Flow (Connection Email)](._credential-type_images/5af271aa.png)

* **`Authority`**:
  The authority URL as provided by the party to connect to. This is the endpoint which authorizes the connection and issues a respective token.

* **`Client ID`**:
  An ID issued by the authenticating authority.

* **`Scopes`**:
  These are the authentication scopes requested by the connection and which ust be granted by the authenticating authority.
  This is typically defined by the issuing authority in the context of the client id.
  I.e. if the other party has granted the access scopes which you define here, they authentication will be successful.
  Otherwise, the authentication may fail.

##### OAuth (Device Flow)

With input-constrained devices that connect to the internet, rather than authenticate the user directly, the device asks the user to go to a link on their computer or smartphone and authorize the
device.
This avoids a poor user experience for devices that do not have an easy way to enter text.
To do this, device apps use the Device Authorization Flow, in which they pass along their Client ID to initiate the authorization process and get a token.

You can check the [Auth0 documentation](https://auth0.com/docs/get-started/authentication-and-authorization-flow/device-authorization-flow) for an example description.

For settings please see [Client Credential Flow](#oauth-client-credentials).

#### Secret

* **`Secret`**:
  Select a `Secret` from the drop-down list. If the list is empty, then you need to first [create a secret](/docs/assets/resources/asset-resource-secret) to be able to assign it here.

  Please [follow this link to "Advanced Concepts"](/docs/concept/advanced/secret-management) to learn about the concept and use of the Security Storage.
