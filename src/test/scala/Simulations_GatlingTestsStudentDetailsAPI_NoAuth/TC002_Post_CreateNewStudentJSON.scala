package Simulations_GatlingTestsStudentDetailsAPI_NoAuth

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC002_Post_CreateNewStudentJSON extends Simulation{

  //http configuration
  val httpConfig=http.baseUrl("https://thetestingworldapi.com").
    header("Content-Type", "application/json").
    header("Accept" , "application/json")

  //scenario config
 val scn= scenario("Creating a new student by passing JSON Payload").exec(
    http("PostStudent Details").post("/api/studentsDetails").
      body(RawFileBody("src/test/resources/TestData/createStudent.json")).asJson.check(status.is(200))
  )

  //setup load

  setUp(
    scn.inject(atOnceUsers(1))).
    protocols(httpConfig)

}
