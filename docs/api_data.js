define({ "api": [
  {
    "type": "delete",
    "url": "/activities/:id",
    "title": "Delete Existing Activity",
    "version": "1.0.0",
    "name": "DeleteActivity",
    "group": "Activity",
    "description": "<p>Delete existing activity</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique activity identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a activity if available i.e additional details that clarify what a activity is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": true,
            "field": "resources",
            "description": "<p>Set of possible resource(or item) that may be required to perform an activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when activity was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when activity was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/activities",
    "title": "List Activities",
    "version": "1.0.0",
    "name": "GetActivities",
    "group": "Activity",
    "description": "<p>Returns a list of activities</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Activity[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of activities</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique activity identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "data.plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "data.incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about a activity if available i.e additional details that clarify what a activity is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": true,
            "field": "data.resources",
            "description": "<p>Set of possible resource(or item) that may be required to perform an activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when activity was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when activity was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of activity returned.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest activity was last modified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n   {\n    \"_id\": \"5aeed5f37e422f2743b97eb0\",\n    \"incidentType: {\n    \"_id: \"5af2fe3ea937a3238bd8e64b\",\n    \"name\": \"Flood\"\n    \"nature\": \"Natural\",\n    \"family\": \"Hydrological\",\n    \"color\": \"#F7EF18\",\n   },\n   \"description\": \"Nobis provident aliquam nobis.\",\n   \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n   \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n  }\n  ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/activities/:id",
    "title": "Get Existing Activity",
    "version": "1.0.0",
    "name": "GetActivity",
    "group": "Activity",
    "description": "<p>Get existing activity</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique activity identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a activity if available i.e additional details that clarify what a activity is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": true,
            "field": "resources",
            "description": "<p>Set of possible resource(or item) that may be required to perform an activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when activity was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when activity was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/activities/schema",
    "title": "Get Activity Schema",
    "version": "1.0.0",
    "name": "GetActivitySchema",
    "group": "Activity",
    "description": "<p>Returns activity json schema definition</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/activities/:id",
    "title": "Patch Existing Activity",
    "version": "1.0.0",
    "name": "PatchActivity",
    "group": "Activity",
    "description": "<p>Patch existing activity</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique activity identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a activity if available i.e additional details that clarify what a activity is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": true,
            "field": "resources",
            "description": "<p>Set of possible resource(or item) that may be required to perform an activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when activity was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when activity was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/activities",
    "title": "Create New Activity",
    "version": "1.0.0",
    "name": "PostActivity",
    "group": "Activity",
    "description": "<p>Create new activity</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique activity identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a activity if available i.e additional details that clarify what a activity is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": true,
            "field": "resources",
            "description": "<p>Set of possible resource(or item) that may be required to perform an activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when activity was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when activity was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/activities/:id",
    "title": "Put Existing Activity",
    "version": "1.0.0",
    "name": "PutActivity",
    "group": "Activity",
    "description": "<p>Put existing activity</p>",
    "filename": "lib/activity.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/activities/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique activity identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a activity if available i.e additional details that clarify what a activity is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": true,
            "field": "resources",
            "description": "<p>Set of possible resource(or item) that may be required to perform an activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when activity was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when activity was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/plans/:id",
    "title": "Delete Existing Plan",
    "version": "1.0.0",
    "name": "DeletePlan",
    "group": "Plan",
    "description": "<p>Delete existing plan</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique plan identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": true,
            "field": "incidentType",
            "defaultValue": "undefined",
            "description": "<p>An incident type under which a plan is applicable. If not available a plan is applicable to all incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a plan if available i.e additional details that clarify what a plan is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "publishedAt",
            "description": "<p>Date when plan was made effective for use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when plan was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when plan was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/plans/:id",
    "title": "Get Existing Plan",
    "version": "1.0.0",
    "name": "GetPlan",
    "group": "Plan",
    "description": "<p>Get existing plan</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique plan identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": true,
            "field": "incidentType",
            "defaultValue": "undefined",
            "description": "<p>An incident type under which a plan is applicable. If not available a plan is applicable to all incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a plan if available i.e additional details that clarify what a plan is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "publishedAt",
            "description": "<p>Date when plan was made effective for use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when plan was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when plan was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/plans/schema",
    "title": "Get Plan Schema",
    "version": "1.0.0",
    "name": "GetPlanSchema",
    "group": "Plan",
    "description": "<p>Returns plan json schema definition</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/plans",
    "title": "List Plans",
    "version": "1.0.0",
    "name": "GetPlans",
    "group": "Plan",
    "description": "<p>Returns a list of plans</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Plan[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of plans</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique plan identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": true,
            "field": "data.incidentType",
            "defaultValue": "undefined",
            "description": "<p>An incident type under which a plan is applicable. If not available a plan is applicable to all incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about a plan if available i.e additional details that clarify what a plan is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.publishedAt",
            "description": "<p>Date when plan was made effective for use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when plan was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when plan was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of plan returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest plan was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n   {\n    \"_id\": \"5aeed5f37e422f2743b97eb0\",\n    \"incidentType: {\n    \"_id: \"5af2fe3ea937a3238bd8e64b\",\n    \"name\": \"Flood\"\n    \"nature\": \"Natural\",\n    \"family\": \"Hydrological\",\n    \"color\": \"#F7EF18\",\n   },\n   \"description\": \"Nobis provident aliquam nobis.\",\n   \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n   \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n  }\n  ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/plans/:id",
    "title": "Patch Existing Plan",
    "version": "1.0.0",
    "name": "PatchPlan",
    "group": "Plan",
    "description": "<p>Patch existing plan</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique plan identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": true,
            "field": "incidentType",
            "defaultValue": "undefined",
            "description": "<p>An incident type under which a plan is applicable. If not available a plan is applicable to all incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a plan if available i.e additional details that clarify what a plan is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "publishedAt",
            "description": "<p>Date when plan was made effective for use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when plan was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when plan was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/plans",
    "title": "Create New Plan",
    "version": "1.0.0",
    "name": "PostPlan",
    "group": "Plan",
    "description": "<p>Create new plan</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique plan identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": true,
            "field": "incidentType",
            "defaultValue": "undefined",
            "description": "<p>An incident type under which a plan is applicable. If not available a plan is applicable to all incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a plan if available i.e additional details that clarify what a plan is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "publishedAt",
            "description": "<p>Date when plan was made effective for use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when plan was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when plan was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/plans/:id",
    "title": "Put Existing Plan",
    "version": "1.0.0",
    "name": "PutPlan",
    "group": "Plan",
    "description": "<p>Put existing plan</p>",
    "filename": "lib/plan.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/plans/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique plan identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": true,
            "field": "incidentType",
            "defaultValue": "undefined",
            "description": "<p>An incident type under which a plan is applicable. If not available a plan is applicable to all incident type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a plan if available i.e additional details that clarify what a plan is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "publishedAt",
            "description": "<p>Date when plan was made effective for use.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when plan was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when plan was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/procedures/:id",
    "title": "Delete Existing Procedure",
    "version": "1.0.0",
    "name": "DeleteProcedure",
    "group": "Procedure",
    "description": "<p>Delete existing procedure</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique procedure identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Activity",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity under which a procedure is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a procedure if available i.e additional details that clarify what a procedure is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": "<p>Procedure number(or sequence) for ordering in relation to other activity procedures.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when procedure was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when procedure was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/procedures/:id",
    "title": "Get Existing Procedure",
    "version": "1.0.0",
    "name": "GetProcedure",
    "group": "Procedure",
    "description": "<p>Get existing procedure</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique procedure identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Activity",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity under which a procedure is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a procedure if available i.e additional details that clarify what a procedure is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": "<p>Procedure number(or sequence) for ordering in relation to other activity procedures.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when procedure was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when procedure was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/procedures/schema",
    "title": "Get Procedure Schema",
    "version": "1.0.0",
    "name": "GetProcedureSchema",
    "group": "Procedure",
    "description": "<p>Returns procedure json schema definition</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/procedures",
    "title": "List Procedures",
    "version": "1.0.0",
    "name": "GetProcedures",
    "group": "Procedure",
    "description": "<p>Returns a list of procedures</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Procedure[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of procedures</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique procdeure identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "data.plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "data.incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Activity",
            "optional": false,
            "field": "data.activity",
            "description": "<p>Activity under which a procedure is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary about a procedure if available i.e additional details that clarify what a procedure is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "data.number",
            "description": "<p>Procedure number(or sequence) for ordering in relation to other activity procedures.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when procedure was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when procedure was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of activity.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of activity returned.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest activity was last modified.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n   {\n    \"_id\": \"5aeed5f37e422f2743b97eb0\",\n    \"incidentType: {\n    \"_id: \"5af2fe3ea937a3238bd8e64b\",\n    \"name\": \"Flood\"\n    \"nature\": \"Natural\",\n    \"family\": \"Hydrological\",\n    \"color\": \"#F7EF18\",\n   },\n   \"description\": \"Nobis provident aliquam nobis.\",\n   \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n   \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n   \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n  }\n  ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/procedures/:id",
    "title": "Patch Existing Procedure",
    "version": "1.0.0",
    "name": "PatchProcedure",
    "group": "Procedure",
    "description": "<p>Patch existing procedure</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique procedure identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Activity",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity under which a procedure is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a procedure if available i.e additional details that clarify what a procedure is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": "<p>Procedure number(or sequence) for ordering in relation to other activity procedures.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when procedure was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when procedure was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/procedures",
    "title": "Create New Procedure",
    "version": "1.0.0",
    "name": "PostProcedure",
    "group": "Procedure",
    "description": "<p>Create new procedure</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique procedure identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Activity",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity under which a procedure is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a procedure if available i.e additional details that clarify what a procedure is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": "<p>Procedure number(or sequence) for ordering in relation to other activity procedures.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when procedure was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when procedure was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/procedures/:id",
    "title": "Put Existing Procedure",
    "version": "1.0.0",
    "name": "PutProcedure",
    "group": "Procedure",
    "description": "<p>Put existing procedure</p>",
    "filename": "lib/procedure.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-plan.herokuapp.com/v1/procedures/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique procedure identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "Plan",
            "optional": false,
            "field": "plan",
            "description": "<p>A plan under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "IncidentType",
            "optional": false,
            "field": "incidentType",
            "description": "<p>An incident type under which a activity is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "Activity",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity under which a procedure is applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which activity applicable.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of procedure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary about a procedure if available i.e additional details that clarify what a procedure is for.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "number",
            "description": "<p>Procedure number(or sequence) for ordering in relation to other activity procedures.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when procedure was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when procedure was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5aeed5f37e422f2743b97eb0\",\n  \"incidentType: {\n   \"_id: \"5af2fe3ea937a3238bd8e64b\",\n   \"name\": \"Flood\"\n   \"nature\": \"Natural\",\n   \"family\": \"Hydrological\",\n   \"color\": \"#F7EF18\",\n  },\n  \"description\": \"Nobis provident aliquam nobis.\",\n  \"publishedAt\": \"2018-06-06T10:16:19.230Z\",\n  \"createdAt\": \"2018-05-06T10:16:19.230Z\",\n  \"updatedAt\": \"2018-05-06T10:16:19.230Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
