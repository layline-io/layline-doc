import TimerResponse from "../interfaces/TimerResponse";
import DateTime from "../classes/DateTime";

/**
 * The [TimerService Asset](/docs/03-assets/services/asset-service-timer.md) facilitates a way to schedule and execute tasks at specified intervals and with given payloads.
 * It is configured via the Configuration Center. To create and manage scheduled tasks, it provides a nunber of functions which are described in this class.
 *
 * The way layline.io exposes this class is by providing an object `services` within a Javascript Asset.
 * This is then used to access linked Services and their configured functions.
 *
 * **Let's look at this using an example on how to schedule a timer:**
 * 
 * ```js
 * services.TimerService.ScheduleFixedRate({
 *   Group: 'MyGroup',
 *   Period: 60000,
 *   Name: 'MyTimer',
 *   Payload: '{"message": "Hello, world!"}'
 * });
 * ```
 * This will schedule a timer to run every minute and execute the payload `{"message": "Hello, world!"}`.
 * 
 * In order to receive the payload of the timer, you need to define a Workflow with a Frame Input Processor, which in turn is linked to a Timer Source, which in turn is linked to the Timer Service.
 * 
 * In there you would receive the timer as a message which you can then process as you need to.
 * Here is an example of how the timer message can be processed within a Workflow that receives the timer message:
 * 
 * ```javascript
 * // We are defining a function "checkPayload" that will take payload parameters 
 * // as input parameters
 * export function onMessage() {
 *     if (message.data) {
 *         stream.logInfo("Payload received: " + message.data.Payload);
 *         // This is an example is received as a meesage from the Timer Service
 *         // message.data = {
 *             "Group":"TimerGroup",
 *             "Name":"TEST-05",
 *             "NumberOfTry":1,
 *             "FireTime":"2025-02-26T15:00:27.006+01:00",
 *             "ScheduledFireTime":"2025-02-26T15:00:27+01:00",
 *             "Payload":"MyPayload"
 *         // }
 *         //
 *         // Do something with the payload
 *         // ...
 *         // Emitting the message to the "Committer" Processor will commit the message.
 *         // Otherwise the message will be rescheduled again for the configured period of time (depends on the type of schedule).
 *         stream.emit(message, OUTPUT_PORT); // -> Send message to "Committer" Processor
 *     }
 * }
 * ```
 * 
 * The script above reveals the structure of the message that is received from the Timer Service.
 * 
 * @abstract
 */
export default class TimerService {
  /** @hidden **/
  constructor() {}

  /**
   * Cancels a timer based on the provided group and name.
   *
   * This method allows you to cancel a timer that has been previously created using the `CreateTimer` method.
   * The timer is identified by its group and name, which are specified in the `CreateTimer` call.
   *
   * @example
   * ```js
   * // Cancel a timer
   * const response = services.TimerService.CancelTimer({
   *   Group: 'MyGroup',
   *   Name: 'MyTimer'
   * });
   * ```
   *
   * @param {Object} params - The parameters for the timer cancellation.
   * @param {string} params.Group - The timer group of the timer to cancel.
   * @param {string} params.Name - The name of the timer to cancel.
   *
   * @returns {TimerResponse} A TimreResponse object containing the result of the timer cancellation.
   */
  CancelTimer(params: {
    Group: string;
    Name: string;
  }): TimerResponse {
    return;
  }

  /**
   * Retrieves a timer based on the provided group and name.
   *
   * This method allows you to retrieve a timer that has been previously created using the `CreateTimer` method.
   * The timer is identified by its group and name, which are specified in the `CreateTimer` call.
   *
   * @example
   * ```js
   * // Retrieve a timer
   * const response = services.TimerService.GetTimer({
   *   Group: 'MyGroup',
   *   Name: 'MyTimer'
   * });
   * ```
   *
   * @param {Object} params - The parameters for the timer retrieval.
   * @param {string} params.Group - The timer group of the timer to retrieve.
   * @param {string} params.Name - The name of the timer to retrieve.
   *
   * @returns {TimerResponse} A TimreResponse object containing the result of the timer retrieval.
   */
  GetTimer(params: {
    Group: string;
    Name: string;
  }): TimerResponse {
    return;
  }

  /**
   * Retrieves all timers in a range and with applied filters.
   *
   * This method allows you to retrieve all timers that have been previously created using the `CreateTimer` method.
   *
   * @example
   * ```js
   * // Retrieve all timers which match the filter criteria
   * const response = services.TimerService.GetTimers({
   *   Group: 'MyGroup',
   *   FromIdx: 0,
   *   ToIdx: 10,
   *   NameFilter: 'MyTimer',
   *   TypeFilter: 'MyType',
   *   PayloadTypeFilter: 'MyPayloadType'
   * });
   * ```
   *
   * @param {Object} params - The parameters for the timer retrieval.
   * @param {string} params.Group - The timer group of the timers to retrieve.
   * @param {number} params.FromIdx - The index of the first timers to retrieve.
   * @param {number} params.ToIdx - The index of the last timers to retrieve.
   * @param {string} [params.NameFilter] - Optional name filter to apply to the timer retrieval. The filter works as a "contains" filter.
   * @param {string} [params.TypeFilter] - Optional type filter to apply to the timer retrieval. The filter works as a "contains" filter.
   * @param {string} [params.PayloadTypeFilter] - Optional payload type filter to apply to the timer retrieval. The filter works as a "contains" filter.
   *
   * @returns {TimerResponse[]} An array of TimerResponse objects containing the result of the timer retrieval.
   */
  GetTimers(params: {
    Group: string;
    FromIdx: number;
    ToIdx: number;
    NameFilter?: string;
    TypeFilter?: string;
    PayloadTypeFilter?: string;
  }): TimerResponse[] {
    return;
  }

  /**
   * Schedules a cron job to run at a specific time.
   *
   * This method allows you to schedule a cron job to run at a specific time.
   * The cron job is identified by its group and name, which are specified in the `ScheduleCron` call.
   *
   * @example
   * ```js
   * // Schedule a cron job
   * const response = services.TimerService.ScheduleCron({
   *   Group: 'MyGroup',
   *   Expression: '0 0 * * *',
   *   Name: 'MyCronJob'
   * });
   * ```
   *
   * @param {Object} params - The parameters for the cron job scheduling.
   * @param {string} params.Group - The group of the cron job to schedule.
   * @param {string} params.Expression - The cron expression to schedule the cron job.
   * @param {string} params.Name - The name of the cron job to schedule.
   * @param {string} params.Payload - The payload of the cron job.
   * @param {DateTime} [params.StartAt] - The start time of the cron job.
   *
   * @returns {void | Error} A void response or an Error object.
   */
  ScheduleCron(params: {
    Group: string;
    Expression: string;
    Name: string;
    Payload: string;
    StartAt?: DateTime;
  }): void | Error {
    return;
  }

  /**
   * Schedules a timer to run repeatedly at a specific interval.
   *
   * This method allows you to schedule a timer to run repeatedly at a specific interval.
   * The timer is identified by its group and name, which are specified in the `ScheduleFixedRate` call.
   *
   * @example
   * ```js
   * // Schedule a timer
   * const response = services.TimerService.ScheduleFixedRate({
   *   Group: 'MyGroup',
   *   Period: 60000,
   *   Name: 'MyTimer',
   *   Payload: '{"message": "Hello, world!"}'
   *   StartAt: new DateTime('2024-01-01T00:00:00Z')
   * });
   * ```
   *
   * @param {Object} params - The parameters for the timer scheduling.
   * @param {string} params.Group - The group of the timer to schedule.
   * @param {number} params.Period - The repeat interval in milliseconds.
   * @param {string} params.Name - The name of the timer to schedule.
   * @param {string} params.Payload - The payload of the timer.
   * @param {DateTime} [params.StartAt] - The start time of the timer.
   *
   * @returns {void | Error} A void response or an Error object.
   */
  ScheduleFixedRate(params: {
    Group: string;
    Period: number;
    Name: string;
    Payload: string;
    StartAt?: DateTime;
  }): void | Error {
    return;
  }


  /**
   * Schedules a timer to run once at a specific time.
   *
   * This method allows you to schedule a timer to run once at a specific time.
   * The timer is identified by its group and name, which are specified in the `ScheduleOnce` call.
   *
   * @example
   * ```js
   * // Schedule a timer
   * const response = services.TimerService.ScheduleOnce({
   *   Group: 'MyGroup',
   *   When: new DateTime('2024-01-01T00:00:00Z'),
   *   Name: 'MyTimer',
   *   Payload: '{"message": "Hello, world!"}'
   * });
   * ```
   *
   * @param {Object} params - The parameters for the timer scheduling.
   * @param {string} params.Group - The group of the timer to schedule.
   * @param {DateTime} params.When - The time to schedule the timer.
   * @param {string} params.Name - The name of the timer to schedule.
   * @param {string} params.Payload - The payload of the timer.
   *
   * @returns {void | Error} A void response or an Error object.
   */

  ScheduleOnce(params: {
    Group: string;
    When: DateTime;
    Name: string;
    Payload: string;
  }): void | Error {
    return;
  }
}
