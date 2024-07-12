package Simulations_GatlingTestsStudentDetailsAPI_NoAuth

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC004_Delete_DeleteExistingStudent extends Simulation {
  //http Config
  val httpConfig=http.baseUrl("https://thetestingworldapi.com")
  //scenario
  val scn=scenario("Delete student").exec(http("DeleteStudent").
    delete("/api/studentsDetails/10293883").check(status.is(200)))
  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
