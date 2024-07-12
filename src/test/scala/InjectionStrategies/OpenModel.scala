package InjectionStrategies

import io.gatling.http.Predef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class OpenModel extends Simulation {
/*  Injection profiles, differences between open and closed workload models
  The definition of the injection profile of users is done with the injectOpen and injectClosed methods (just inject in Scala).
   This method takes as an argument a sequence of injection steps that will be processed sequentially.
  Open vs Closed Workload Models
  When it comes to load model, systems behave in 2 different ways:
   Closed systems, where you control the concurrent number of users
    Open systems, where you control the arrival rate of users
    Make sure to use the proper load model that matches the load your live system experiences.
  Closed system are system where the number of concurrent users is capped.
   At full capacity, a new user can effectively enter the system only once another exits.
  Typical systems that behave this way are:
    call center where all operators are busy
  ticketing websites where users get placed into a queue when the system is at full capacity
    On the contrary, open systems have no control over the number of concurrent users: users keep on arriving even though applications have trouble serving them. Most websites behave this way.

  Open and closed workload models are antinomical and you can’t mix them in the same injection profile.*/

  //http config
  val httpConfig = http.baseUrl("https://thetestingworldapi.com") //baseurl setting
  http.header("Accept", "application/json") //optional req headers
  http.header("Connection", "keep-alive") //optional req headers

  //scenario config
  val scn = scenario("GetAllStudentDetails").exec(
    http("Get All student details")
      .get("/api/studentsDetails").check(status.is(200))

  )

  //Load setup config
  //setUp(scn.inject(nothingFor(10),atOnceUsers(5))).protocols(httpConfig) //1,2
  setUp(scn.inject(rampUsers(10).during(5))).protocols(httpConfig) //ramping up
 /* setUp(
    scn.inject(stressPeakUsers(1000).during(20.seconds) // Inject a peak of 1000 users over 20 seconds
    ).protocols(httpConfig)*/

    /*
setUp(
    scn.inject(
      nothingFor(4), // 1
      atOnceUsers(10), // 2
      rampUsers(10).during(5), // 3
      constantUsersPerSec(20).during(15), // 4
      constantUsersPerSec(20).during(15).randomized, // 5
      rampUsersPerSec(10).to(20).during(10.minutes), // 6
      rampUsersPerSec(10).to(20).during(10.minutes).randomized, // 7
      stressPeakUsers(1000).during(20) // 8
    ).protocols(httpProtocol))*/

}
