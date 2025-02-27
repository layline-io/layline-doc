import TimerChoice from "./TimerChoice";

  /**
   * Represents a timer response.
   */
  export default interface TimerResponse {
    /**
     *The group name of the timer.
     */
    Group: string;
    /**
     * Name of the timer that will be used to identify the timer in the group.
     * The name must be unique within the group.
     */
    Name: string;
    /**
     * The respective timer {@link TimerChoice}.
     */
    Timer: TimerChoice;
  }
