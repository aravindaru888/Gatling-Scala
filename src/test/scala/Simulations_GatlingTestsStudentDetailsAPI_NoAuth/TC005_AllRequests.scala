package Simulations_GatlingTestsStudentDetailsAPI_NoAuth
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC005_AllRequests extends Simulation {
  //http configuration
  val httpConfig = http.baseUrl("https://thetestingworldapi.com").
    header("Content-Type", "application/json").
    header("Accept", "application/json")

  //scenario config
  val scn = scenario("E2E").exec(
    http("PostStudent Details").post("/api/studentsDetails").
      body(RawFileBody("src/test/resources/TestData/createStudent.json")).asJson.check(status.is(201))
  ).pause(10)
    .exec(
    http("Put Request to update details").put("/api/studentsDetails/10293859").
      body(RawFileBody("src/test/resources/TestData/UpdateStudent.json")).asJson.check(status.in(200, 204))).
    pause(10).
    exec(
    http("Get All student details")
      .get("/api/studentsDetails").check(status.is(200))).
    pause(10).
    exec(
    http("DeleteStudent").
      delete("/api/studentsDetails/10293883").check(status.in(200, 204)))

  //setup config
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}
