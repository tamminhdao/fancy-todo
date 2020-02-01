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
})
