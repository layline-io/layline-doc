---
title: Migrating to version 2.0.x
description: Guiding to migrate from version 1.x.x towards version 2.0.x
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The following section lists the main new features introduced with layline.io major release 2.0. 
Some of the new feature require to follow the described steps to ensure environment and processing is working correctly. 

### Akka to Pekko switch

layline.io switched from akka to pekko. This in return requires adaptations in the appropriate `application.conf` files for config-server and reactive-engine(s). 
Depending on your OS you can locate the `application.conf` like the following:

<div className="tab">
<Tabs>
<TabItem value="windows" label="Windows" default>

```bash
C:\Users\<username>\.layline
```

</TabItem>
<TabItem value="macos" label="macOS" default>

```bash
/Users/<username>/.layline/
```

</TabItem>
<TabItem value="linux" label="Linux" default>

```text
$HOME/.layline/
```

</TabItem>
</Tabs>
</div>

#### Configuration Server
Please perform the following steps to adapt your configuration:

1. Find `application.conf` within subfolder `config-server`
2. Change config entry `akka` to `pekko`
3. Change config entry `akka-persistence-jdbc` to `pekko-persistence-jdbc`

```bash
layline {
}

pekko {
  
  persistence {
    journal {
      plugin = "jdbc-journal"
    }
    snapshot-store {
      plugin = "jdbc-snapshot-store"
    }
  }

}

pekko-persistence-jdbc {

[...]

```


#### Reactive Engine(s)
Adapting the reactive engine(s) configuration can become a bit more complex in case your environment deviates from the default installation, e.g.
more than one reactive engine has been configured.

Please perform the following steps to adapt your *default* configuration:

1. Find `application.conf` within subfolder `reactive-engine`
2. Change config entry `akka` to `pekko`
3. Change config entry `akka-persistence-jdbc` to `pekko-persistence-jdbc`

```bash
layline {
}

pekko {
  
  persistence {
    journal {
      plugin = "jdbc-journal"
    }
    snapshot-store {
      plugin = "jdbc-snapshot-store"
    }
  }

}

pekko-persistence-jdbc {

[...]

```

Any additional configuration entries need to be checked towards the *akka* keyword and replaced by the *pekko* keyword.

Example:
```bash
pekko {
  loglevel = ERROR

  loggers = [
    "io.layline.common.pekko.LoggingEventListener"
  ]
[...]

```

In case of questions, please don't hesitate to contact us at support@layline.io.

### Javascript: Nashorn to GraalVM switch


### New feature "Debugging"


### New fully typed script language "Python"


