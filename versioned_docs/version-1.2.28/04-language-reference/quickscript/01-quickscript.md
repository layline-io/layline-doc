---
title: QuickScript Language Reference
description: QuickScript language reference.
---

import WipDisclaimer from '../../snippets/common/_wip-disclaimer.md'

# QuickScript

## What is QuickScript?

QuickScript is a limited language, which introduces

1. custom functions in places where
2. large scale scripting languages would be overkill.

The language is simple and quick to use - as the name implies - and customized to the application.
Functionality and methods will be added over time.
If you have suggestions, then please submit them to [support@layline.io](mailto: support@layline.io).

## Where can I use QuickScript?

QuickScript can be used in various places throughout the configuration of a layline.io Project. One example would be in the [Mapping Asset](../processors-flow/asset-flow-mapping). 
Therein and within the definition the individual mappings, you can use QuickScript to apply minor transformations and checks in order to determine the value to be mapped.

In the example below (1) spaces contained in element source.SMSC.SUPLSERVICE are wiped out using the `strReplace` method.

![cff9bae6.png](.quick-script_images/cff9bae6.png "QuickScript Example (QuickScript)")

Another example (2) shows how a string can be easily padded we three leading zeros.

![00a0f1e6.png](.quick-script_images/00a0f1e6.png "QuickScript Example (QuickScript)")

Other places where `QuickScript` can be used:

- [Frame Output Processor](../processors-output/asset-output-frame) --> in the routing rules
- [Filter & Routing Processor](../processors-flow/asset-flow-filterrouting) --> in the filter & routing rules
- [Mapping Processor](../processors-flow/asset-flow-mapping) --> in the mapping assignments
- [Generic Format](../formats/asset-format-generic) --> in the grammar definition


## Language Reference

### Data Types

#### Primitives

##### Types


| Type       | Description                                                                                                                                                                                                                                                                                               | Range                                                                               |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Boolean    | Represent true or false values.                                                                                                                                                                                                                                                                           | true / false                                                                        |
| Character  | Single 16-bit Unicode character.                                                                                                                                                                                                                                                                          | from`'\u0000'` to `'\uffff'` inclusive, that is, from 0 to 65535                    |
| DateTime   | A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as 2007-12-03T10:15:30+01:00. The underlying data type corresponds to Java's [OffsetDateTime class](https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html). Java's class methods are not supported. |                                                                                     |
| Decimal    | Immutable, arbitrary-precision signed decimal numbers. Use this for precise calculations, e.g. for money representations. Based on Java's [BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html) data types.                                                                   | from 1.40129846432481707e-45 to 3.40282346638528860e+38 (positive or negative)      |
| Double     | Double-precision 64-bit IEEE 754 floating point. For decimal values, this data type is generally the default choice. As mentioned above, this data type should never be used for precise values, such as money calculations.                                                                              | from 4.94065645841246544e-324d to 1.79769313486231570e+308d (positive or negative). |
| Long       | 64-bit two's complement integer.                                                                                                                                                                                                                                                                          | from -9223372036854775808 to 9223372036854775807, inclusive                         |
| String     | Sequence/array of Character values.                                                                                                                                                                                                                                                                       |                                                                                     |
| ByteString | Immutable sequence of bytes.                                                                                                                                                                                                                                                                              |                                                                                     |

##### Primitive Operations

The following operations are supported in the given precedence:


| Precedence | Operation            | Operator(s) |
| :----------: | ---------------------- |-------------|
|     1     | unary                | ~ !         |
|     2     | multiplicative       | * / %       |
|     3     | additive             | + -         |
|     4     | bitwise shift        | \<\< >>     |
|     5     | relational           | \< > \<= >= |
|     6     | equality             | == !=       |
|     7     | bitwise AND          | &           |
|     8     | bitwise exclusive OR | ^           |
|     9     | bitwise inclusive OR | &vert;      |

#### Reference Data Types


| Type            | Description                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MessageAccessor | Path to a data format structure. This will point to a an element in a internal data dictionary structure, e.g. a leaf or field. |

### Operations

#### DateTime Operations

##### dtAddDays

Add a number of days to a provided date and time.


| **dtAddDays**  | Description                                                                          |
| ---------------- | -------------------------------------------------------------------------------------- |
| **Signature**  | `dtAddDays(DateTime input, Long daysToAdd`                                           |
| **Parameters** | `input` - The date and time to add days to.<br/>`daysToAdd` - Number of days to add. |
| **Returns**    | `DateTime` - Date with added days.                                                   |

##### dtAddHours

Add a number of hours to a provided date and time.


| **dtAddHours** | Description                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Signature**  | `dtAddHours(DateTime input, Long hoursToAdd`                                            |
| **Parameters** | `input` - The date and time to add hours to.<br/>`hoursToAdd` - Number of hours to add. |
| **Returns**    | `DateTime` - Date with added hours.                                                     |

##### dtAddMinutes

Add a number of minutes to a provided date and time.


| **dtAddMinutes** | Description                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| **Signature**    | `dtAddMinutes(DateTime input, Long minutesToAdd`                                              |
| **Parameters**   | `input` - The date and time to add minutes to.<br/>`minutesToAdd` - Number of minutes to add. |
| **Returns**      | `DateTime` - Date with added minutes.                                                         |

##### dtAddSeconds

Add a number of minutes to a provided date and time.


| **dtAddSeconds** | Description                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| **Signature**    | `dtAddSeconds(DateTime input, Long secondsToAdd`                                              |
| **Parameters**   | `input` - The date and time to add seconds to.<br/>`secondsToAdd` - Number of seconds to add. |
| **Returns**      | `DateTime` - Date with added seconds.                                                         |

##### dtCreate

Create a date from given date and time parameters


| **dtCreate**   | Description                                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Signature**  | `dtCreate(Long year, Long month, Long day, Long hour, Long minute, Long second)`                                                                                                                                            |
| **Parameters** | `year` - Year of date, e.g. "2022".<br/>`month` - Month of date ("1-12").<br/>`day` - Day of date ("1-31")<br/>`hour` - Hour of time ("0-24")<br/>`minute` - Minute of time ("0-60")<br/>`second` - Second of time ("0-60") |
| **Returns**    | `DateTime` - Created date and time.                                                                                                                                                                                         |

##### dtEpochSecond

Get the number of seconds which have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds. This is the Unix epoch (or Unix time or POSIX time or Unix timestamp).


| **dtEpochSecond** | Description                                                   |
| ------------------- | --------------------------------------------------------------- |
| **Signature**     | `dtEpochSecond(DateTime input)`                               |
| **Parameters**    | `input` - Date and time for which to calculate epoch seconds. |
| **Returns**       | `Long` - Epoch seconds for date since January 1, 1970.        |

#### Bit Operations

##### bitIsSet

Check whether a bit in a `Long` number is set a certain position.


| **bitIsSet**   | Description                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Signature**  | `bitIsSet(Long input, Long bitNumber)`                                                                                                       |
| **Parameters** | `input` - Long number which to check for a certain bitflag.<br/>`bitNumber` - Position at which to check whether a bit is set or not (0-63). |
| **Returns**    | `Boolean` - true if bit is set, else false.                                                                                                  |

#### Math Operations

##### max

Returns the larger of two numbers.
Types `Decimal`, `Double`, and `Long` are supported.
Provided numbers must be of the same type.


| **max**        | Description                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Signature**  | `max(Decimal left, Decimal right)`                                                                               |
| **Parameters** | `left` - First number<br/>`right` - Second number.<br/><br/>Types `Decimal`, `Double`, and `Long` are supported. |
| **Returns**    | Larger of the two numbers. Return type is the same as the given number types.                                    |

##### min

Returns the smaller of two numbers.
Types `Decimal`, `Double`, and `Long` are supported.
Provided numbers must be of the same type.


| **min**        | Description                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Signature**  | `min(Decimal left, Decimal right)`                                                                               |
| **Parameters** | `left` - First number<br/>`right` - Second number.<br/><br/>Types `Decimal`, `Double`, and `Long` are supported. |
| **Returns**    | Smaller of the two numbers. Return type is the same as the given number types.                                   |

#### Message Operations

##### msgCrc64

Returns a 64-bit checksum for a given `MessageAccessor` path.
The path must exist.


| **msgCrc64**   | Description                                                    |
| ---------------- | ---------------------------------------------------------------- |
| **Signature**  | `msgCrc64(MessageAccessor accessor)`                           |
| **Parameters** | `accessor` - A valid layline.io data dictionary accessor path. |
| **Returns**    | `Long` - CRC checksum.                                         |
| **Example**    | `msgCrc64(message.myPath.mySubPath)`                           |

##### msgExists

Checks whether a given `MessageAccessor` path exists.
Use this to check if specific data paths are filled.


| **msgCrc64**   | Description                                      |
| ---------------- | -------------------------------------------------- |
| **Signature**  | `msgExists(MessageAccessor accessor)`            |
| **Parameters** | `accessor` - Path to check for existence.        |
| **Returns**    | `Long` - CRC checksum.                           |
| **Example**    | `msgExists(message.myCompany.myData.xyz.Header)` |

#### String Operations

##### strConcat

Returns a string concatenated from two given strings.


| **strConcat**  | Description                                           |
| ---------------- | ------------------------------------------------------- |
| **Signature**  | `strConcat(String left, String right`                 |
| **Parameters** | `left` - First string.<br/>`right` - Second string.   |
| **Returns**    | `String` - Concatenated string.                       |
| **Example**    | ```strConcat("Jane ", "Doe") // Returns "Jane Doe"``` |

##### strLength

Returns the length of a string.


| **strLength**  | Description                                         |
| ---------------- | ----------------------------------------------------- |
| **Signature**  | `strLength(String input)`                           |
| **Parameters** | `input` - String for which to calculate the length. |
| **Returns**    | `Long` - Length of the string.                      |
| **Example**    | `strLength("Jane Doe") // Returns 8`                |

##### strReplace

Returns a new string, for which string fragments within that string have been replaced by a replacement string.
The replacement proceeds from the beginning of the string to the end, for example, replacing "aa" with "b" in the string "aaa" will result in "ba" rather than "ab".


| **strReplace** | Description                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Signature**  | `strReplace(String input, String toReplace, String replacement)`                                                                                                                                                             |
| **Parameters** | `input` - String which contains fragments to be replaced.<br/>`toReplace` - A string that is to be replaced by `replacement`. Replaces all occurrences.<br/>`replacement` - The string that replaces the `toReplace` string. |
| **Returns**    | `String` - Length of the string.                                                                                                                                                                                             |
| **Example**    | `strReplace("Quick brown fox.", "brown", "red") // Returns "Quick red fox."`                                                                                                                                                 |

##### strToLower

Returns the given string value converted to lower case.


| **strToLower** | Description                                          |
| ---------------- | ------------------------------------------------------ |
| **Signature**  | `strToLower(String input)`                           |
| **Parameters** | `input` - String to convert to lower case.           |
| **Returns**    | `String` - Provided string converted to lower case.  |
| **Example**    | `strToLower("I am Small!") // Returns "i am small!"` |

##### strToUpper

Returns the given string value converted to upper case.


| **strToUpper** | Description                                          |
| ---------------- | ------------------------------------------------------ |
| **Signature**  | `strToUpper(String input)`                           |
| **Parameters** | `input` - String to convert to upper case.           |
| **Returns**    | `String` - Provided string converted to upper case.  |
| **Example**    | `strToUpper("I am large!") // Returns "I AM LARGE!"` |

##### strSubstring

Returns a portion of a string, starting at the specified index and extending for a given number of characters afterwards.


| **strSubstring** | Description                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Signature**    | `strSubstring(String input, Long start, Long length)`                                                                                                                                                           |
| **Parameters**   | `input` - String to of which to extract a fragment.<br/>`start` - The index of the first character to include in the returned substring (zero-based-index).<br/>`length` - The number of characters to extract. |
| **Returns**      | `String` - A new string containing the specified part of the given string.                                                                                                                                      |
| **Example**      | `strSubstring("Quick brown fox.", 6, 6) // Returns "Quick fox."`                                                                                                                                                |

##### strEndsWith

Determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.


| **strEndsWith** | Description                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| **Signature**   | `strEndsWith(String input, String suffix)`                                                               |
| **Parameters**  | `input` - String being searched.<br/>`suffix` - The characters to be searched for at the end of `input`. |
| **Returns**     | `Boolean` - `true` if the given characters are found at the end of the string; otherwise, `false`        |
| **Example**     | `strEndsWith("Quick brown fox.", "fox.") // Returns true`                                                |

##### strStartsWith

Determines whether a string starts with the characters of a specified string, returning `true` or `false` as appropriate.


| **strStartsWith** | Description                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Signature**     | `strStartsWith(String input, String prefix)`                                                               |
| **Parameters**    | `input` - String being searched.<br/>`prefix` - The characters to be searched for at the start of `input`. |
| **Returns**       | `Boolean` - `true` if the given characters are found at the start of the string; otherwise, `false`        |
| **Example**       | `strStartsWith("Quick brown fox.", "Quick") // Returns true`                                               |

##### strExpand

Expands an environment variables which is enclosed in a string, into its underlying value.
This environment variable may have been defined in [Resource Environment Asset](../resources/asset-resource-environment) or was defined via on system level.
:::tip
layline.io is internally using the StringSubstitutor method which provides additional functionality. You can learn more about it [here](https://commons.apache.org/proper/commons-text/apidocs/org/apache/commons/text/StringSubstitutor.html) under section "_Using Interpolation_".
:::


| **strExpand**  | Description                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Signature**  | `strExpand(String input)`                                                                                                                                                                                                                                                                                                                                      |
| **Parameters** | `input` - String to be expanded.                                                                                                                                                                                                                                                                                                                               |
| **Returns**    | `String` - Expanded string. See example.                                                                                                                                                                                                                                                                                                                       |
| **Example**    | Assuming that`lay:myEnvionmentVar` has been defined as "MyVar" in [Resource Environment Asset](../resources/asset-resource-environment):<br/>`strExpand("This is ${lay:myEnvionmentVar}") // Replaces the environment variable lay:myEnvironmentVar and returns "This is MyVar".`<br/>`strExpand("${date:yyyy-MM-dd}")  // Expands to current date.` |

##### strTrimString

Removes leading and trailing whitespace from a string and returns a new string, without modifying the original string.
Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

If the string to trim represents an empty character sequence, or the first and last characters of character sequence represented by this string both have codes greater than '\u0020' (the space character), then a reference to this string is returned.
Otherwise, if there is no character with a code greater than '\u0020' in the string, then a string representing an empty string is returned.


| **strTrimString** | Description                                                            |
| ------------------- | ------------------------------------------------------------------------ |
| **Signature**     | `strTrimString(String input)`                                          |
| **Parameters**    | `input` - String to be trimmed.                                        |
| **Returns**       | `String` - Trimmed string.                                             |
| **Example**       | `strTrimString(" Yippieh Ey Yeah     ") // Returns "Yippieh Ey Yeah".` |

---

<WipDisclaimer></WipDisclaimer>
