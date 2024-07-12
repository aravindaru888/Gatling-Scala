package Correlation_Chaining
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class Correlation extends Simulation {

  //http Config
  val httpConfig = http.baseUrl("https://thetestingworldapi.com").
    header("Content-Type", "application/json").
    header("Accept", "application/json")

  //scenario
  val scn = scenario("Creating a new student by passing JSON Payload").exec(
    http("PostStudent Details").post("/api/studentsDetails").
      body(RawFileBody("src/test/resources/TestData/createStudent.json")).asJson.
      check(status.is(201)).check(jsonPath("$.id").saveAs("Id"))
  )/*.exec(session => {
    val IdCreated=session("Id").as[Int]
    session}
  )*/
    .pause(10)
    .exec(http("Get Details").get("/api/studentsDetails/${Id}").check(status.is(200)))
  //setup load
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}
