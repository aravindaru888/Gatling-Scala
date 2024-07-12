package Simulations_GatlingTestsGoRestAuthoization

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TC006_GetUserDetailsAuth extends Simulation{

  //http Config

 val httpConfig= http.baseUrl("https://gorest.co.in").header("Content-Type","application/json").
    header("Accept","application/json").
   header("Authorization","Bearer 477122b54eff345e5f4ff33a6ee31b558b2e357664a2be290c1cfbaa4c5cdaee")
   .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15")
  //scenario config

  val scn=scenario("Get api with authorisation").exec(http("GET CALL").get("/public/v2/users").
    check(status.is(200)).check(substring("name").count.saveAs("counts")).
    check(
     header("Content-Type").transform(_.matches("application/json.*")).is(true))
    ).
 exec { session =>
  // Retrieve the saved count value and print it
  val counts = session("counts").as[Int]
  println(counts.equals(10))
  println(s"The substring 'foo' appeared $counts times in the response.")
  session
 }

 //setup load

 setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
