package Simulations_GatlingTestsStudentDetailsAPI_NoAuth

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC001_GetAllStudentDetails extends Simulation {

  //http config
val httpConfig=http.baseUrl("https://thetestingworldapi.com") //baseurl setting
  http.header("Accept","application/json") //optional req headers
  http.header("Connection","keep-alive") //optional req headers

  //scenario config
  val scn = scenario("GetAllStudentDetails").exec(
    http("Get All student details")
      .get("/api/studentsDetails").check(status.is(200))

  )

  //Load setup config
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)
}
