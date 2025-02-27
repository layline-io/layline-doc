import DateTime from "../classes/DateTime";

  /**
   * Represents a timer element that is executed once.
   */
  export default interface TimerOnce {
    /**
     * The date and time of the timer.
     */
    When: DateTime;
    /**
     * The payload of the timer.
     */
    Payload: any;
  }

