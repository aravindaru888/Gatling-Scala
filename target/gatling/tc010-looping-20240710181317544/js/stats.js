var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2173",
        "ok": "2173",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "456",
        "ok": "456",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "percentiles1": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles2": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1750",
        "ok": "1750",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2088",
        "ok": "2088",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.119",
        "ok": "0.119",
        "ko": "-"
    }
},
contents: {
"req_looping-for-get-3afef": {
        type: "REQUEST",
        name: "Looping for Get",
path: "Looping for Get",
pathFormatted: "req_looping-for-get-3afef",
stats: {
    "name": "Looping for Get",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2173",
        "ok": "2173",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "736",
        "ok": "736",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "percentiles1": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1958",
        "ok": "1958",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2130",
        "ok": "2130",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.071",
        "ok": "0.071",
        "ko": "-"
    }
}
    },"req_get-details-26a44": {
        type: "REQUEST",
        name: "get details",
path: "get details",
pathFormatted: "req_get-details-26a44",
stats: {
    "name": "get details",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "percentiles2": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles3": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles4": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.048",
        "ok": "0.048",
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
