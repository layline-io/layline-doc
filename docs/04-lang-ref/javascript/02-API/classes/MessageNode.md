---
id: "MessageNode"
title: "Class: MessageNode"
sidebar_label: "MessageNode"
sidebar_position: 0
custom_edit_url: null
---

Individual node of a [Message](Message.md)

Assume that we have a data dictionary structure of
* CSV
     * RECORD_TYPE ...
     * FIRST_NAME ...
     * LAST_NAME ...
     * ...

Then `message.data.CSV` is a MessageNode as is `message.data.CSV.RECORD_TYPE`.
As an example of use check [Message.findStatus](Message#findStatus).
