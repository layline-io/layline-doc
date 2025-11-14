# Service

Service is an abstract class which is only instantiated by layline.io itself and not for your direct use.
It is directly related to the Services which you can define within layline.io. Examples are

* Cassandra Service
* JDBC Service
* Hazelcast Service
* HTTP Service
* Aerospike Service
* more

When configuring a Python Asset, you may also define one or more Services for use within that Python Asset.
layline.io then exposes these assigned Services to Python via the `services` pseudo-class.

Let's assume you have a Python Asset with two assigned Services `MyService_A` and `MyService_B`.
You can then access these Services within Python like this:

```python
SvcA = services.MyService_A
SvcB = services.MyService_B
```

The way layline.io exposes this class is by providing an object `services` within a Python Asset.
This is then used to access linked Services and their configured functions.

**Let's look at this using an example:**

Let's assume we have configured a Python Asset which is linked to A JDBC Service Asset by the name of `MyDBService`.
The Service `MyDBService` has one Function `MyInsert` which you have defined when you set up the JDBC Service Asset using the UI.

You can access all Services which you may have linked to a Python Asset by using the `services` keyword like so:

**Opening a connection:**
```python
OUTPUT_PORT = None
connection = None

# Initial setup
def on_init():
    global OUTPUT_PORT
    OUTPUT_PORT = processor.getOutputPort('MyOutput')

def on_stream_start():
    global connection
    # Open a connection to the DB service
    if not connection:
        connection = services.MyDBService.openConnection()
    connection.beginTransaction()
```

Depending on the type of service you are addressing you have different options which you have to understand and know.
A JDBC Service for example exposes a [Connection](Connection.md) whereas a HTTP Service does not.

**Check the respective Service Asset documentation on how to use the Service within a Python Asset.**
