import { DataStore } from "./"

describe("DataStore", () => {
  it("retrieves the data", () => {
     const data = DataStore.retrieve()

    expect(data.length).toEqual(8)
  })

  it("updates a task", () => {
    const data = DataStore.retrieve()

    expect(data[0].completedAt).toBeNull()

    DataStore.update(0)
    const updatedData = DataStore.retrieve()

    expect(updatedData[0].completedAt).not.toBeNull()
  })
})
