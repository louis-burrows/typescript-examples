// extending classes allows you to change the functionality of a parent class slightly in a new child class

abstract class UserBase {
  abstract setUsername(newUsername: string): void;
}

// parent class
class User extends UserBase {
  setUsername(newUsername: string) {
    // updated database
    // didn't return the new username
  }
}

type UserDetailsClass = {
  setEmail: () => void;
}

// child class
class UserDetails extends User implements UserDetailsClass {
  constructor() {
    // this is only required if you have to pass a variable up to a parent class in order to create the instance
    super()
  }

  // this setUsername will override the 'setUsername' in User when we call new UserDetails().setUsername('adam')
  setUsername = (newUsername: string) => {
    // user 'super' to access the parent class that we extended
    super.setUsername(newUsername)
    // we want our new setUsername function to return the username, as the original one doesn't
    // => we could change the original class in the User class, but we don't want it to return a value in other instances
    return newUsername
  }

  // the child class can also have it's own methods unrelated to the parent
  setEmail = () => {

  }
}

// create instance of parent class
const usr = new User()
usr.setUsername('adam') // this one doesn't return anything
// usr.setEmail() // setEmail doesn't exist on this class

// create instance of child class
const user = new UserDetails()
const newUsername = user.setUsername('adam')
const newEmail = user.setEmail() // this is also available
