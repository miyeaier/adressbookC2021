class AddressBook {
  storage = window.localStorage
  index() {
    const entries = this.storage.getItem("entries")
    return JSON.parse(entries)
  }
  create(data) {
    if (data.constructor === Object) {
      const oldEntries = window.localStorage.getItem("entries") || "[]";
      const newEntries = JSON.parse(oldEntries);
      newEntries.push(data);
      window.localStorage.setItem("entries", JSON.stringify(newEntries));
      return "the entry was added to the address book";
    } else {
      return "we could not process you entry"
    }
  }
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = AddressBook;
}