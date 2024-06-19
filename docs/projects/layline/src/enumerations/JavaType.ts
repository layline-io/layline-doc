/**
 * layline.io's primitive data types are based on Java's primitve data types. This is important to understand when working with data within layline.io
 * This is for example both relevant when
 * * defining data formats (e.g. [Generic Formats]../../../../assets/formats/asset-format-generic))
 * * working with Javascript in the contet of the [Javascript Flow Processor](../../../../assets/processors-flow/asset-flow-javascript)
 *
 * This enumeration definition is simply to provide a map from layline.io's data types to the respective Java primitive data types.
 *
 * Do not use e.g. "`JavaType.BigDecimal`" anywhere. It will not work.
 */
enum JavaType {
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html)
     */
    BigDecimal = "java.math.BigDecimal",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/math/BigInteger.html)
     */
    BigInteger = "java.math.BigInteger",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Byte.html)
     */
    Byte = "java.lang.Byte",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Byte.html)
     */
    ByteString = "java.lang.ByteString",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Character.html)
     */
    Character = "java.lang.Character",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)
     */
    Double = "java.lang.Double",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)
     */
    Integer = "java.lang.Integer",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)
     */
    Long = "java.lang.Long",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/Number.html)
     */
    Number = "java.lang.Number",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/time/OffsetDateTime.html)
     */
    OffsetDateTime = "java.time.OffsetDateTime",
    /**
     * [Click here for java reference](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)
     */
    String = "java.lang.String",
}

export default JavaType;
