import DateTime from "../classes/DateTime";

  /**
   * Represents a timer element that is executed according to a cron expression.
   */
  export default interface TimerCron {
    /**
     * The start date and time of the timer.
     */
    StartAt: DateTime;
    /**
     * The cron expression of the timer.
     */
    Expression: string;
    /**
     * The payload of the timer.
     */
    Payload: any;
  }

