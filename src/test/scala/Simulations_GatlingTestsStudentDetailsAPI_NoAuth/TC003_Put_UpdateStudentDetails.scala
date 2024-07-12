package Simulations_GatlingTestsStudentDetailsAPI_NoAuth
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC003_Put_UpdateStudentDetails extends Simulation {

//http config
val httpConfig=http.baseUrl("https://thetestingworldapi.com").
  header("Content-Type","application/json").
  header("Accept","application/json")

  //scenario config
  val scn=scenario("Updating the student details").exec(
    http("Put Request to update details").put("/api/studentsDetails/10293859").
      body(RawFileBody("src/test/resources/TestData/UpdateStudent.json")).asJson.check(status.is(200))


  )
//setup Load
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}
