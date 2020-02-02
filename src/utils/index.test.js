import { Util } from "."

describe("Util", () => {
  describe("sortTasksByGroup", () => {
    it("groups tasks by their group names", () => {
      const util = Util()
      const data = [
        {
          "id": 1,
          "group": "Purchases",
          "task": "Go to the bank",
          "dependencyIds": [],
          "completedAt": null
        },
        {
          "id": 2,
          "group": "Purchases",
          "task": "Buy hammer",
          "dependencyIds": [],
          "completedAt": null
        },
        {
          "id": 3,
          "group": "Build Airplane",
          "task": "Have a snack",
          "dependencyIds": [],
          "completedAt": null
        }
      ]

      const groupedData = {
        "Purchases": [
          {
            "id": 1,
            "group": "Purchases",
            "task": "Go to the bank",
            "dependencyIds": [],
            "completedAt": null
          },
          {
            "id": 2,
            "group": "Purchases",
            "task": "Buy hammer",
            "dependencyIds": [],
            "completedAt": null
          }, 
        ],
        "Build Airplane": [
          {          
            "id": 3,
            "group": "Build Airplane",
            "task": "Have a snack",
            "dependencyIds": [],
            "completedAt": null
          }
        ]
      }

      const result = util.sortTasksByGroup(data)
      expect(result).toEqual(groupedData)
    })
  })

  describe("groupSummary", () => {
    it("returns the analytics for each group", () => {
    const util = Util()
    const groupedData = {
        "Purchases": [
          {
            "id": 1,
            "group": "Purchases",
            "task": "Go to the bank",
            "dependencyIds": [],
            "completedAt": null
          },
          {
            "id": 2,
            "group": "Purchases",
            "task": "Buy hammer",
            "dependencyIds": [],
            "completedAt": "2/3/20"
          }, 
        ],
        "Build Airplane": [
          {          
            "id": 3,
            "group": "Build Airplane",
            "task": "Have a snack",
            "dependencyIds": [],
            "completedAt": null
          }
        ]
      }
    const expectedResult = [
      { 
        name: "Purchases",
        totalTasks: 2, 
        completedTasks: 1
        },
      {
        name: "Build Airplane",
        totalTasks: 1,
        completedTasks: 0
      }
    ]

    const groupAnalytics = util.groupSummary(groupedData)
    expect(groupAnalytics).toEqual(expectedResult)
    })
  })

  describe("getTasksByGroupName", () => {
    it("returns all the tasks in the group", () => {
      const data = [{
        "id": 5,
        "group": "Purchases",
        "task": "Buy paint",
        "dependencyIds": [
          1
        ],
        "completedAt": null
      },
      {
        "id": 6,
        "group": "Build Airplane",
        "task": "Hammer nails into wood",
        "dependencyIds": [
          2,
          3,
          4
        ],
        "completedAt": null
      },
      {
        "id": 7,
        "group": "Build Airplane",
        "task": "Paint wings",
        "dependencyIds": [
          5,
          6
        ],
        "completedAt": null
      }]

      const purchasesTasks = [
        {
          "id": 5,
          "group": "Purchases",
          "task": "Buy paint",
          "dependencyIds": [
            1
          ],
          "completedAt": null
        }
      ]

      const util = Util()
      const filteredResult = util.getTasksByGroupName(data, "Purchases")
      
      expect(filteredResult).toEqual(purchasesTasks)
    })
  })
})
