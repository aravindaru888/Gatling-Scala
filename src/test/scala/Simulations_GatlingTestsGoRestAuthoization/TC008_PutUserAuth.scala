package Simulations_GatlingTestsGoRestAuthoization
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC008_PutUserAuth extends Simulation {
  //http config
  val httpConfig = http.baseUrl("https://gorest.co.in").header("Content-Type", "application/json").
    header("Accept", "application/json").header("Authorization", "Bearer 477122b54eff345e5f4ff33a6ee31b558b2e357664a2be290c1cfbaa4c5cdaee")

  //scenario Config
  val scn = scenario("Put test").exec(http("POST API").put("/public/v2/users/7020381").
    body(RawFileBody("src/test/resources/TestData/UpdateUserAuth.json")).asJson.check(status.in(200 to 204)).check(status.not(404))
  .check(responseTimeInMillis.lte(1000)).check(bodyString.saveAs("body")))
  .exec { session =>
    // Retrieve the saved count value and print it
    val ResponseBody = session("body").as[String]
    println(s"Response Body is $ResponseBody.")
    session
  }
  //setup load
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
