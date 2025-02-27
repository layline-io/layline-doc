import DateTime from "../classes/DateTime";

  /**
   * Represents a timer element that is executed at a fixed rate.
   */
  export default interface TimerFixedRate {
    /**
     * The start date and time of the timer.
     */
    StartAt: DateTime;
    /**
     * The period of the timer in milliseconds.
     */
    Period: BigInt;
    /**
     * The payload of the timer.
     */
    Payload: any;
  }

