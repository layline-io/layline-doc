---
title: Source Timer
description: Source Timer Asset. Use this to define the technical parameters for a AWS S3 source connection.
tags:

- source
- timer
- timer service
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'
import NameAndDescription from '../../snippets/assets/_asset-name-and-description.md';
import RequiredRoles from '../../snippets/assets/_asset-required-roles.md';
import ThrottlingAndFailure from '../../snippets/assets/_asset-source-throttling-and-failure.md';

# Source Timer

## Purpose

A Timer Source allows you to define a source, which can generate pre-defined messages which in turn are triggered in certain time-intervals.

You would want a Timer Source in the case that you want something to happen in regular intervals, for example.
Every time the timer is triggered a message is sent onto the way in a Workflow, and the Workflow can start doing what it was designed for.
Most times, the payload of the message will not be that relevant in the Workflow.
What will be relevant is that something should happen, and the timer source makes sure that the Workflow is kicked into action.

## Used by

* [Input Message](../processors-input/asset-input-message)

## Configuration

### Name & Description

![Name & Description (Timer Source)](./.asset-source-timer_images/20d6a78a.png "Name & Description (Timer Source)")

<NameAndDescription></NameAndDescription>

### Required roles

<RequiredRoles></RequiredRoles>

### Throttling & Failure Handling

<ThrottlingAndFailure></ThrottlingAndFailure>


### Operation Mode

A Timer Source can operate in two different modes:

![Operation Mode (Timer Source)](.asset-source-timer_images/image_2025-03-18-09-28-06.png "Operation Mode (Timer Source)")


**1. Stand alone source:** The Timer Source will operate independently of the timer service. It will use its own internal timer to trigger messages. Relevant timers are defined in the `Timers` section within this Asset.

**2. Using timer service:** The Timer Source will not use its own internal timer but will rely on the timer service to trigger messages. The timer service will be used to trigger messages at specified intervals.

#### Stand alone source

In this mode, the Timer Source will use its own internal timer to trigger messages. Relevant timers are defined in the `Timers` section within this Asset.

##### Timers

Timers define two things:

1. When to issue a new message to send downstream
2. Payload contained in the message.

You can create a theoretically unlimited number of timers which fire independently of each other.
Timers work independent of each other on a per Workflow-instance.
So if you have two instances of the same Workflow, then all timers you define here will be fired per Workflow instance.

Let's have a look.

![](.asset-source-timer_images/9f4efa44.png "Timers (Timer Source)")

To create a new timer, click the plus sign next to `Timers`.

![](.asset-source-timer_images/e69a5e66.png "Message structure (Timer Source)")

A new timer with default values is automatically created. Let's go through the properties:

* **`Timer name`** : A unique name for the timer. This name will be passed downstream with the message so that you can identify which timer triggered the message.

* **`Timer description`** : Any description which helps to describe the timer better.

    * **`Timer type`** : Timers can be of three different types:

        1. **`Once`** : A timer which fires only one time up startup of the Workflow.

            * **`Delay of the timer [ms]`** : A delay in milliseconds to wait until the timer fires after Workflow startup.
              A value of `300000` for example signals that the time shall be fired once 5 minutes after Workflow startup.

           img class="frame" src="./.asset-source-timer_images/a7105830.png "Once timer (Timer Source)")

        2. **`Cyclic`** : A timer which repeats itself in a simple time pattern.

            * **`Interval of the timer [ms]`** : Time in milliseconds between timer firings.

           ![](.asset-source-timer_images/2f5b8ea5.png "Cyclic timer (Timer Source)")

        3. **`Cron`** : Define granular timer controls via cron settings.

            * **`Cron expression`** : Define the cron expression for when to fire the timer.
              Click the button to the right for UI-driven help.

           ![](.asset-source-timer_images/fcccfce4.png "Cron timer (Timer Source)")

* **`Payload`** : A triggered timer will generate a new message.
  It already contains metadata about the message and the timer which fired it.

  You can, however, also define a payload to send along with a timer triggered message, if necessary.
  This payload must be either empty or in valid JSON format.:

  ![](.asset-source-timer_images/a1a278cc.png "Payload (Timer Source)")

  Instead of only passing hard-coded payloads you may include environment strings as well:

  ![](.asset-source-timer_images/ee92ec47.png "Payload with environment vars (Timer Payload)")

#### Using timer service

In this mode, the Timer Source will not use its own internal timer but will rely on the timer service to trigger messages. The timer service will be used to trigger messages at specified intervals.

So instead of defining timers within the Timer Source, you will define them in the [Timer Service](../services/asset-service-timer).

![Using timer service (Timer Source)](.asset-source-timer_images/image_2025-03-18-16-53-44.png "Using timer service (Timer Source)")

#### Stream Settings

In this section you define whether you want to create timed batches, or timed events.

![Stream Type (Timer Source)](.asset-source-timer_images/image_2025-03-18-16-34-43.png "Stream Type (Timer Source)")

- **Batches** are the synthetic equivalent of reading individual files.
- **Events** have no batch beginning or end, but are issued based on the defined timers.

##### Batch Stream

Select to create a timer triggered batch stream, if you want to

1. Create a synthetic batch which opens, and potentially closes after a pre-defined amount of time.
   This allows you to define a time-span of an open batch. Something which is not possible with an event stream.
2. Create a trigger only, disregarding any potential payload within the batch.
   In essence, you only get a `onStreamStart` event which you can react to.

![Batch Stream (Timer Source)](.asset-source-timer_images/image_2025-03-18-16-37-51.png "Batch Stream (Timer Source)")

* **`Stream type`** : Select `Batch Stream` here.

* **`Stream name`** : Provide an individual name for the batch.
  This will show up in the batch payload which can be processed downstream in a Workflow.

* **`Batch creation timer type`** : Select between `At fixed rate` or `Cron tab`.

    * **`At fixed rate`** : Create a new batch every x seconds.
        * **`Batch creation interval [sec]`** : Number of seconds to wait in between creating a new batch

          ![](.asset-source-timer_images/6d7d9675.png "Batch creation timer type At fixed rate (Timer Source)")

    * **`Cron tab`** : Define granular timer controls via cron settings.
        * **`Batch creation cron tab expression`** : Define the cron expression for when to fire the time.
          Click the button to the right for UI-driven help.

          ![](.asset-source-timer_images/2eeeea15.png "Batch creation timer type Cron tab (Timer Source)")

* **`Batch closing mode`** : `Batch Stream` mode allows you to define when to close the batch. There are three modes available:

    1. **`Immediately`** : The batch is closed right after being opened. No payload is being sent.
       A `onStreamStart` event is sent through the system that can be reacted upon. You can - for example - have a `onStreamStart` even in a Javascript Processor to react to this.
       Note that since no payload will be sent in this mode, there is no point to have a `onMessage` reaction in any of your scripts. You also do not require to set a [Timer](../sources/asset-source-timer#timers). It will never fire  because the stream will immediately terminate.

       ![](.asset-source-timer_images/aa230924.png "Batch closing mode Immediately (Timer Source)")

    2. **`When all timers have fired`** : You can define individual timers below. This setting will then ensure that all of these timers are being observed.
       The batch will be closed when all timers were executed.

       ![](.asset-source-timer_images/2470de80.png "Batch closing mode When all timers have fired (Timer Source)")

    3. **`After a fixed delay`** : Close the batch after a fixed amount of time. Timers as defined below will still fire until the delay has expired.

       ![](.asset-source-timer_images/31a1e6ec.png "Batch closing mode After a fixed delay (Timer Source)")
       
        * **`Fixed delay [ms]`** : Time in milliseconds to wait until the batch is closed.
          If you have defined timers below, then those timers which fire before this delay, will fire, others will be ignored.

##### Event Stream

An event stream implies that messages will not be in opening and closing batches.
Instead, messages will be issued based on the defined timers below.

If you have a Workflow with a Javascript Processor, you can react to those messages by way of `onMessage(message)`.
The payload is defined in the timers below. A downstream script can then identify by the timer name which timer was fired and also retrieve the payload, if any.

![Event Stream (Timer Source)](.asset-source-timer_images/image_2025-03-18-16-39-40.png "Event Stream (Timer Source)")

* **`Stream name`** : Provide an individual name for the event stream.
  This will show up in the batch payload which can be processed downstream in a Workflow.

##### Message Structure

When a message is issued within a Batch or Event Stream and sent downstream in the Workflow, you can expect the following message structure: 

![Message structure (Timer Source)](.asset-source-timer_images/f8af67da.png "Message structure (Timer Source)")

- **`Group`** is the name of the Timer Source.
- **`Name`** is the name of the individual timer which triggered the message.
- **`ScheduledFireTime`** is the time when the timer was supposed to be fired. This only applies to cron-based timers.
- **`FireTime`** is the time when the timer was actually fired. This only applies to cron-based timers.
- **`Payload`** is the payload which you have defined in the with an individual timer.

## Related Topics

### Internal
* [Input Message](../processors-input/asset-input-message)
* [Timer Service](../services/asset-service-timer)

### External
* [Cron](https://en.wikipedia.org/wiki/Cron)

---

<WipDisclaimer></WipDisclaimer>
