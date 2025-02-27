import TimerCron from "./TimerCron";
import TimerFixedRate from "./TimerFixedRate";
import TimerOnce from "./TimerOnce";

/**
 * Represents a timer choice.
 * 
 * @interface
 */
export default interface TimerChoice {
    /**
     * Structure for a timer element that is executed according to a cron expression.
     */
    Cron: TimerCron,
    /**
     * Structure for a timer element that is executed at a fixed rate.
     */
    FixedRate: TimerFixedRate,
    /**
     * Structure for a timer element that is executed once.
     */
    Once: TimerOnce,
}

