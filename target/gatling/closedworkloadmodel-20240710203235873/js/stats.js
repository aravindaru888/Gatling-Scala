var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1966",
        "ok": "1966",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3102",
        "ok": "3102",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "percentiles1": {
        "total": "68",
        "ok": "67",
        "ko": "-"
    },
    "percentiles2": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles4": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1951,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.619",
        "ok": "93.619",
        "ko": "-"
    }
},
contents: {
"req_get-all-student-e13c4": {
        type: "REQUEST",
        name: "Get All student details",
path: "Get All student details",
pathFormatted: "req_get-all-student-e13c4",
stats: {
    "name": "Get All student details",
    "numberOfRequests": {
        "total": "1966",
        "ok": "1966",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3102",
        "ok": "3102",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles2": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles4": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1951,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.619",
        "ok": "93.619",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
