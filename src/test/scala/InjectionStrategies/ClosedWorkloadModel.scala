package InjectionStrategies
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class ClosedWorkloadModel extends Simulation{

  //http config
  val httpConfig = http.baseUrl("https://thetestingworldapi.com") //baseurl setting
  http.header("Accept", "application/json") //optional req headers
  http.header("Connection", "keep-alive") //optional req headers

  //scenario config
  val scn = scenario("GetAllStudentDetails").exec(
    http("Get All student details")
      .get("/api/studentsDetails").check(status.is(200)))
  //Load setup config
  setUp(
    scn.inject(
      constantConcurrentUsers(1).during(1) // 1
    ).protocols(httpConfig)

    //      rampConcurrentUsers(10).to(20).during(10) // 2
  )

}
