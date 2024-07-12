package Simulations_GatlingTestsGoRestAuthoization

import io.gatling.core.Predef.{atOnceUsers, scenario}
import io.gatling.http.Predef.{http, status}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC009_DeleteUserWithAuth extends Simulation {

  // http Config
  val httpConfig = http.baseUrl("https://gorest.co.in").header("Authorization", "Bearer 477122b54eff345e5f4ff33a6ee31b558b2e357664a2be290c1cfbaa4c5cdaee")

  //scenario
  val scn = scenario("Delete User with Auth").exec(http("Delete User").
    delete("/public/v2/users/7020381").check(status.in(200,204)))
  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
