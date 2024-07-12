var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "maxResponseTime": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "meanResponseTime": {
        "total": "963",
        "ok": "-",
        "ko": "963"
    },
    "standardDeviation": {
        "total": "935",
        "ok": "-",
        "ko": "935"
    },
    "percentiles1": {
        "total": "963",
        "ok": "-",
        "ko": "963"
    },
    "percentiles2": {
        "total": "1431",
        "ok": "-",
        "ko": "1431"
    },
    "percentiles3": {
        "total": "1805",
        "ok": "-",
        "ko": "1805"
    },
    "percentiles4": {
        "total": "1879",
        "ok": "-",
        "ko": "1879"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.154",
        "ok": "-",
        "ko": "0.154"
    }
},
contents: {
"req_poststudent-det-5d5bf": {
        type: "REQUEST",
        name: "PostStudent Details",
path: "PostStudent Details",
pathFormatted: "req_poststudent-det-5d5bf",
stats: {
    "name": "PostStudent Details",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "maxResponseTime": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "meanResponseTime": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "percentiles2": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "percentiles3": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "percentiles4": {
        "total": "1898",
        "ok": "-",
        "ko": "1898"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "-",
        "ko": "0.077"
    }
}
    },"req_get-details-30112": {
        type: "REQUEST",
        name: "Get Details",
path: "Get Details",
pathFormatted: "req_get-details-30112",
stats: {
    "name": "Get Details",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "maxResponseTime": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "meanResponseTime": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "percentiles2": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "percentiles3": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "percentiles4": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "-",
        "ko": "0.077"
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
