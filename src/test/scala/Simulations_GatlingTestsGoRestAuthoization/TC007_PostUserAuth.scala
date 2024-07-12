package Simulations_GatlingTestsGoRestAuthoization
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC007_PostUserAuth extends Simulation{

  //http config
  val httpConfig=http.baseUrl("https://gorest.co.in").header("Content-Type", "application/json").
    header("Accept", "application/json").header("Authorization","Bearer 477122b54eff345e5f4ff33a6ee31b558b2e357664a2be290c1cfbaa4c5cdaee")

  //scenario Config
  val scn=scenario("Post test").exec(http("POST API").post("/public/v2/users").
    body(RawFileBody("src/test/resources/TestData/User.json")).asJson.check(status.is(201)).check(substring("Rammi"))
  )

  //setup load

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)

}
