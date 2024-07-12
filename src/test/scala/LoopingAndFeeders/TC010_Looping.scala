package LoopingAndFeeders
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TC010_Looping extends Simulation{

  //http config

  val httpConfig=http.baseUrl("https://thetestingworldapi.com")

  //scenario
  val scn=scenario("Looping").
    repeat(3){
    exec(http("Looping for Get").get("/api/studentsDetails/10294484")
    .check(status.is(200)).check(bodyString.saveAs("ResBody"))
    )
      .pause(10,15)
    }

  //priniting the body
    .exec(session =>{

      val resbody=session("ResBody").as[String]
      println(s"Response Body is $resbody")
      session
    })

    .repeat(2){
      exec(http("get details").get("/api/studentsDetails").check(bodyString.saveAs("AllDetail")))
    }
    //priniting the body
    .exec(session => {

      val resbody2 = session("AllDetail").as[String]
      println(s"Response Body of all details is $resbody2")
      session
    })
  //setup load

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)
}
