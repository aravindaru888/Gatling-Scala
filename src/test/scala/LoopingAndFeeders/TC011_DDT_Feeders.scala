package LoopingAndFeeders
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder
class TC011_DDT_Feeders extends Simulation {
  //http config
  val httpConfig = http.baseUrl("https://reqres.in")

  //define a feeder for test data
  val csvFeeder=csv("src/test/resources/TestData/empDetails.csv").circular


  //scenario config
  val scn=scenario("get the details using CsvFeeder").
    repeat(12){feed(csvFeeder).
      exec(
        http("Get details of each employee")
          .get("/api/users/${emp_id}")
          .check(status.is(200))
          .check(jsonPath("$.data.first_name").is("${first_name}"))
      )

    }
  //setup load

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConfig)


}
